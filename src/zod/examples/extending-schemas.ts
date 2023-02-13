import { z } from "zod";

const CarSchema = z.object({
  color: z.string(),
  fuelType: z.enum(["gasoline", "ethanol", "flex", "diesel", "electric"]),
  numberOfSeats: z.number().positive().default(2),
  transmission: z.union([z.literal("automatic"), z.literal("manual")]),
});

export type Car = z.infer<typeof CarSchema>;

const TruckSchema = CarSchema.extend({
  numberOfAxles: z.number().positive(),
});

export type Truck = z.infer<typeof TruckSchema>;
