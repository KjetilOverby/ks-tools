
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
export const bandhistorikkRouter = createTRPCRouter({


    
      create: protectedProcedure
      .input(z.object({ sagNr: z.string(), datoInn: z.date(), klInn: z.date(), klUt: z.date(), datoUt: z.date(),antTimer: z.number(), feilkode: z.string(), anmSag: z.string(), temperatur: z.number(), userId: z.string(),  handling: z.string(), sideklaring: z.number(), sgSag: z.string(), datoSrv: z.date(),createdById: z.string(), bladedata: z.string(), anmKS: z.string(), createdBy: z.string(), sagtid:z.number(), sgKS: z.string() }))
      .mutation(({ ctx, input }) => {
        const creatorName: string = ctx.session.user.name ?? "DefaultCreator";
    
     return ctx.db.bandhistorikk.create({
         data: {
             sagNr: input.sagNr,
             datoInn: input.datoInn,
             datoUt: input.datoUt,
             klInn: input.klInn,
             klUt: input.klUt,
             antTimer: input.antTimer,
             feilkode: input.feilkode,
             sideklaring: input.sideklaring,
             anmSag: input.anmSag,
             temperatur: input.temperatur,
             creator: creatorName,
             userId: '',
             sagtid: input.sagtid,
             sgSag: input.sgSag,
             anmKS: input.anmKS,
             handling: input.handling,
             datoSrv: input.datoSrv,
             sgKS: input.sgKS,
             createdBy: { connect: { id: ctx.session.user.id} },
             bladedata: { connect: { id: input.bladedata} },
             

         },
       
     })

     
 
  }),
  delete: protectedProcedure.input(z.object({id: z.string()}))
  .mutation(async ({ctx, input}) => {
      return ctx.db.bandhistorikk.delete({
          
          where: {
              id: input.id
          },
      });
  }),
})



 

 


