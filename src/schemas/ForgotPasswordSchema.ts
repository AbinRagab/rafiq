import z from "zod";
import { emailReg } from "./SignUpSchema";



export const forgotPasswordSchema = z.object({
    email: emailReg,
})


export type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>