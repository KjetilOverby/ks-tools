
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
      .query(({ ctx }) => {
         return ctx.db.sawblades.findMany({
          
            include: {
              _count: {
                select: {
                  sawbladeComment: true,
                },
              },
              sawbladeComment: true,
              oml: true,
              personal: true
            },
          
         })
      }),
 


  //     create: protectedProcedure
  //     .input(z.object({ serial: z.string(), type: z.string(), title: z.string() }))
  //     .mutation(({ ctx, input }) => {
    
  //    return ctx.db.sawblades.create({
  //        data: {
  //            serial: input.serial,
  //            type: input.type,
  //        }
  //    })
 
  // })
      create: protectedProcedure
      .input(z.object({ serial: z.string(), type: z.string() }))
      .mutation(({ ctx, input }) => {
    
     return ctx.db.sawblades.create({
         data: {
             serial: input.serial,
             type: input.type,
             userId: ctx.session.user.id,
             createdBy: { connect: { id: ctx.session.user.id} },
         }
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


})

    // delete: protectedProcedure.input(z.object({id: z.string()}))
    // .mutation(async ({ctx, input}) => {
    //     return ctx.db.blade.delete({
    //         where: {
    //             id: input.id
    //         },
    //     });
    // }),

    // update: protectedProcedure.input(z.object({serial: z.string(), type: z.string(), id: z.string(), title: z.string()}))
    // .mutation(async ({ctx, input}) => {
    //     return ctx.db.blade.update({
    //         where: {
    //             id: input.id
    //         },
    //         data: {
    //             title: input.title,
            
    //         }
    //     });
    // }),

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


