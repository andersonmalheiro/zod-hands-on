import { z } from "zod";
import { UserSchema } from "./User";

export const BusinessUserSchema = UserSchema.extend({
  cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "Invalid CNPJ"),
});
