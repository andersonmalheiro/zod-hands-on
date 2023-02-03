import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  lastName: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Nickname must contain at least 3 characters" })
    .optional(),
  email: z.string().email("Provided email is not valid"),
  password: z.string().min(8, { message: "Password is too short" }),
});

export type User = z.infer<typeof UserSchema>;
