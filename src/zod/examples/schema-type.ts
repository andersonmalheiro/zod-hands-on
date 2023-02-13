import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(18, "Age must not be less than 18"),
  email: z.string().email("Provided email is not valid"),
  isAdmin: z.boolean().default(false),
});

export type UserInput = z.input<typeof UserSchema>;
export type UserOutput = z.infer<typeof UserSchema>;

export function parseUser(data: object): UserOutput | undefined {
  const parsedData = UserSchema.parse(data);
  return parsedData;
}

export function safeParseUser(data: object): UserOutput | undefined {
  const result = UserSchema.safeParse(data);

  /**
   * result = {
   *  success: false,
   *  error: {...}
   * }
   * */
  if (!result.success) {
    console.error(result.error.message);
  }

  /**
   * result = {
   *  success: true,
   *  data: {...}
   * }
   * */
  if (result.success) {
    return result.data;
  }
}
