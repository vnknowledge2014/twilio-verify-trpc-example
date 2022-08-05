import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "api-server";

export const trpc = createReactQueryHooks<AppRouter>();