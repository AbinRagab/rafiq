import {z} from "zod";

const nameRegex = /^[\p{L}]+(?: [\p{L}]+)*$/u;


export const signUpSchema = z.object({
    name: z
    .string()
    .trim()
    .min(1,"Name is required")
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters')
    .regex(nameRegex, 'Name can only contain letters and single spaces'),


    email: z
    .string()
    .trim()
    .min(1,'Email is required')
    .email('Please enter a valid email address'),

    jobTitle: z.string().trim().optional(),

    password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .regex(/^\S+$/, 'Password must not contain spaces')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[!@#$%^&*]/,
      'Password must contain at least one special character'
    ),


    confirmPassword: z
    .string()
    .min(1, 'Confirm password is required'),
})
.refine((data)=> data.password === data.confirmPassword ,{
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});


export type signUpFormData = z.infer<typeof signUpSchema>