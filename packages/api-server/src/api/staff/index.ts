import {generateVerifyCode, checkVerifyCode} from "../../utils/twilio";
import * as trpc from "@trpc/server";
import { z } from "zod";

export const staff = trpc.router()
    .mutation("generateVerifyCode", {
        input: z.string().default(""),
        async resolve({ input }) {
            try { 
                const sidOutput = await generateVerifyCode(input);
                return {sid: sidOutput.sid, status: sidOutput.status, message: ""};
            } catch (e: any) {
                return {sid: "", status: "error", message: e.message};
            }
        }
    })
    .mutation("checkVerifyCode", {
        input: z.object({
            mobile: z.string().default(""),
            code: z.string().default(""),
        }),
        async resolve({ input }) {
            try { 
                const sidOutput = await checkVerifyCode(input);
                return {sid: sidOutput.sid, status: sidOutput.status, message: ""};
            } catch (e: any) {
                return {sid: "", status: "error", message: e.message};
            }
        }
    })