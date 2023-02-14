import { object, z } from "zod";
import { Equal, Expect } from "../../utils/type-utils";

export const VehicleSchema = z.object({
  color: z.string(),
  numberOfSeats: z.number().positive().default(2),
  fuelType: z.enum(["gasoline", "ethanol", "flex", "diesel", "electric"]),
  transmission: z.union([z.literal("automatic"), z.literal("manual")]),
});

export type Vehicle = z.infer<typeof VehicleSchema>;

export const TruckSchema = VehicleSchema.extend({
  numberOfAxles: z
    .number({ required_error: "Number of axles is required" })
    .positive(),
});

export type Truck = z.infer<typeof TruckSchema>;

export function isVehicle(value: any): value is Vehicle {
  const castedValue = value as Vehicle;
  return (
    castedValue.color !== undefined &&
    castedValue.fuelType !== undefined &&
    castedValue.numberOfSeats !== undefined &&
    castedValue.transmission !== undefined
  );
}

export function isTruck(value: any): value is Truck {
  const castedValue = value as Truck;
  return isVehicle(castedValue) && castedValue.numberOfAxles !== undefined;
}

type cases = [
  Expect<
    Equal<
      Truck,
      {
        color: string;
        numberOfSeats: number;
        fuelType: "gasoline" | "ethanol" | "flex" | "diesel" | "electric";
        transmission: "automatic" | "manual";
        numberOfAxles: number;
      }
    >
  >
];
