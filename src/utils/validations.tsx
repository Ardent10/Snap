import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "❌ Invalid email" }),
  password: z.string().min(6, { message: "❌ Password is required" }),
  remember: z.boolean().optional(),
});

const singupSchema = z
  .object({
    email: z.string().email({ message: "❌ Invalid email" }),
    password: z
      .string()
      .min(8, { message: "❌ Password is too short" })
      .max(20, { message: "❌ Password is too long" }),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: " ❌Passwords do not match",
    path: ["❌ confirmPassword"],
  });

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "❌ Invalid email" }),
});

const otpSchema = z.object({
  otp: z.string().min(4),
});

const editResumeSchema = z.object({
  name: z.string().min(3),
  email: z.string().email({ message: "❌ Invalid email" }),
  phone: z.string().min(10),
  address: z.string().min(3),
  about: z.string().min(10),
  education: z.string().min(10),
  experience: z.string().min(10),
  skills: z.string().min(10),
  projects: z.string().min(10),
});

export {
  loginSchema,
  singupSchema,
  forgotPasswordSchema,
  otpSchema,
  editResumeSchema,
};
