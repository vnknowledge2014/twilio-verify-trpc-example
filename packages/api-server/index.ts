import * as dotenv from "dotenv";
dotenv.config();

import * as trpcExpress from '@trpc/server/adapters/express';
import express, { Application } from "express";
import { appRouter } from "./src/api/appRouter";
import cors from "cors";

const mount = (app: Application, port: string | number) => {
    const createContext = ({ }: trpcExpress.CreateExpressContextOptions) => ({});

    app.use(cors())
    
    app.use("/trpc", trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }));
    
    app.get("/ping", (req, res) => {
      res.send("Server still alive!");
    });
    
    app.listen(port, () => {
      console.log(`api-server listening at http://localhost:${port}`);
    });
}

const port = process.env.PORT || 8080;
mount(express(), port);

export type AppRouter = typeof appRouter;