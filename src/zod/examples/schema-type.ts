import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(18, "Age must not be less than 18"),
  email: z.string().email("Provided email is not valid"),
});

export type User = z.infer<typeof UserSchema>;

const user: User = {
  age: 18,
  email: "user@email.com",
  name: "John Doe",
};

export function parseUser(data: object): User {
  const parsedData = UserSchema.parse(data);
  return parsedData;
}
