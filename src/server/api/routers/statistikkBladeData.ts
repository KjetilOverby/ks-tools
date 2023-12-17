
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
export const statistikkBladeDataRouter = createTRPCRouter({
 

   
    getAll: protectedProcedure
    .input(z.object({date: z.string(), date2: z.string(), IdNummer: z.string()}))
        .query(({ ctx, input }) => {
         return ctx.db.sawblades.findMany({
          where: {
            AND: [{
              createdAt: {
               lte: new Date(input.date),
               gte: new Date(input.date2),
              },
              IdNummer: {contains: input.IdNummer ? input.IdNummer : undefined},
             
            }]
        
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
   
    getCustomer: protectedProcedure
    .input(z.object({date: z.string(), date2: z.string(), IdNummer: z.string(), init: z.string()}))
        .query(({ ctx, input }) => {
         return ctx.db.sawblades.findMany({
          where: {
            AND: [{
              createdAt: {
               lte: new Date(input.date),
               gte: new Date(input.date2),
              },
              IdNummer: {contains: input.IdNummer ? input.IdNummer : undefined, startsWith: input.init},
             
            }]
        
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
 



    
 


})


 
