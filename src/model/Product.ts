import { z } from "zod";

const ProductSchema = z.object({
  price: z.number().positive(),
  name: z.string(),
  description: z.string(),
});
