
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
export const bandhistorikkRouter = createTRPCRouter({


    
      create: protectedProcedure
      .input(z.object({ sagNr: z.string(), postDato: z.date(), sagtid: z.number(), feilkode: z.string(), handling: z.string(), sideklaring: z.number(), createdById: z.string(), bladedata: z.string() }))
      .mutation(({ ctx, input }) => {
        const creatorName: string = ctx.session.user.name ?? "DefaultCreator";
    
     return ctx.db.bandhistorikk.create({
         data: {
             sagNr: input.sagNr,
             postDato: input.postDato,
             sagtid: input.sagtid,
             feilkode: input.feilkode,
             handling: input.handling,
             sideklaring: input.sideklaring,
             creator: creatorName,
             createdById: input.createdById,
             bladedata: { connect: { id: input.bladedata} }
             

         },
       
     })
 
  }),
})



 

 


