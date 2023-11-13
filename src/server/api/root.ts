import { postRouter } from "~/server/api/routers/post";
import { sawbladesRouter } from "~/server/api/routers/sawblades";
import { commentsRouter } from "~/server/api/routers/comments";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  sawblades: sawbladesRouter,
  comments: commentsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
