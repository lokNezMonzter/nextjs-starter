import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title cannot be empty",
  }),
  body: z.string().min(1, {
    message: "Body cannot be empty",
  }),
  author: z.string().min(1, {
    message: "Author cannot be empty",
  }),
  date: z.string().date(),
});

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Email is required for login" }),
  password: z.string().min(6, { message: "A password is required for login" }),
});

export const registerFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required for registration" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required for registration" }),
  email: z.string().email({ message: "Email is required for registration" }),
  password: z.string().min(6, {
    message: "A password of minimum 6 characters is required",
  }),
});
