import * as trpc from "@trpc/server";
import { staff } from "../staff";

export const appRouter = trpc.router()
  .query("ping", {
    resolve() {
      return "tRPC Still Alive!";
    },
  })
  .merge("staff.", staff)