
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
export const bandhistorikkRouter = createTRPCRouter({


    
      create: protectedProcedure
      .input(z.object({ sagNr: z.string(), datoInn: z.date(), klInn: z.date(), klUt: z.date(), datoUt: z.date(),antTimer: z.number(), feilkode: z.string(), anmSag: z.string(), hv: z.string(), handling: z.string(), sideklaring: z.number(), datoSrv: z.date(),createdById: z.string(), bladedata: z.string(), anmKS: z.string(), sagtid:z.number() }))
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
             creator: creatorName,
             createdById: input.createdById,
             hv: input.hv,
             sagtid: input.sagtid,
             anmKS: input.anmKS,
             handling: input.handling,
             datoSrv: input.datoSrv,
             bladedata: { connect: { id: input.bladedata} },
             

         },
       
     })
 
  }),
})



 

 


