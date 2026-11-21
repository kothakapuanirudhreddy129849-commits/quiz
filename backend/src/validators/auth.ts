import {z} from 'zod';
export const registerSchema=z.object({username:z.string().trim().min(3).max(30),email:z.string().email().toLowerCase(),password:z.string().min(8).max(72),confirmPassword:z.string()}).refine(d=>d.password===d.confirmPassword,{message:'Passwords do not match',path:['confirmPassword']});
export const loginSchema=z.object({email:z.string().email().toLowerCase(),password:z.string().min(1)});
export const profileSchema=z.object({username:z.string().trim().min(3).max(30)});
