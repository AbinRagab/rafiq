import z from "zod";
import { emailReg, passwordreg } from "./SignUpSchema";

export const signInSchema = z.object({
    email: emailReg,
    password: passwordreg,
    rememberMe: z.boolean().optional(),
})


export type signInFormData = z.infer<typeof signInSchema>