
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
export const sawbladesRouter = createTRPCRouter({
  // getAll: protectedProcedure
  // .query(({ ctx }) => {
 
  // return ctx.db.sawblades.findMany({});

   
    getAll: protectedProcedure
    .input(z.object({date: z.string(), date2: z.string()}))
        .query(({ ctx, input }) => {
         return ctx.db.sawblades.findMany({
          where: {
             createdAt: {
              lte: new Date(input.date),
              gte: new Date(input.date2),
             },
          },
          
            include: {
              _count: {
                select: {
                  bandhistorikk: true,
                },
              },
              bandhistorikk: true,
           
        
            },
          
         })
      }),
 

   delete: protectedProcedure.input(z.object({id: z.string()}))
    .mutation(async ({ctx, input}) => {
        return ctx.db.sawblades.delete({
            
            where: {
                id: input.id
            },
        });
    }),

    
      create: protectedProcedure
      .input(z.object({ serial: z.string(), type: z.string(), deleted: z.boolean(), note: z.string() }))
      .mutation(({ ctx, input }) => {
        const creatorName: string = ctx.session.user.name ?? "DefaultCreator";
    
     return ctx.db.sawblades.create({
         data: {
             serial: input.serial,
             type: input.type,
             deleted: false,
             note: input.note,
             userId: ctx.session.user.id,
             creator: creatorName,
             createdBy: { connect: { id: ctx.session.user.id} },
         },
       
     })
 
  }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),
  update: protectedProcedure.input(z.object({deleted: z.boolean(), id: z.string()}))
  .mutation(async ({ctx, input}) => {
      return ctx.db.sawblades.update({
          where: {
              id: input.id
          },
          data: {
              deleted: input.deleted,
          
          }
      });
  }),


})


 

 

    // export const postRouter = createTRPCRouter({
    //     hello: publicProcedure
    //       .input(z.object({ text: z.string() }))
    //       .query(({ input }) => {
    //         return {
    //           greeting: `Hello ${input.text}`,
    //         };
    //       }),


 
//      create: protectedProcedure
//      .input(z.object({ serial: z.string(), type: z.string() }))
//      .mutation(({ ctx, input }) => {
   
//     return ctx.db.sawblades.create({
//         data: {
//             serial: input.serial,
//             type: input.type,
//             userId: ctx.session.user.id,
//         }
//     })

//  })
//  })


