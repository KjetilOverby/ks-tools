
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
export const statistikkBladeDataRouter = createTRPCRouter({
 

   
    getAllHistorikk: protectedProcedure
    .input(z.object({date: z.string(), date2: z.string(), IdNummer: z.string()}))
        .query(({ ctx, input }) => {
         return ctx.db.bandhistorikk.findMany({
          where: {
              createdAt: {
               lte: new Date(input.date),
               gte: new Date(input.date2),
              },
          },
         })
      }),
   
   

 



    
 


})


 
