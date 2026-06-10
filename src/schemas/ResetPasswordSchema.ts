
import z from 'zod'
import { confirmPasswordReg, passwordreg } from './SignUpSchema'

export const resetPasswordSchema = z.object({
    password: passwordreg,
    confirmPassword: confirmPasswordReg,
}).refine((data)=>(data.password === data.confirmPassword),{
    message: 'Password Not Match',
    path: ['confirmPassword']
})

export type resrtPasswordFormData = z.infer<typeof resetPasswordSchema>