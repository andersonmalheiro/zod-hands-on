import {
  Truck,
  Vehicle,
  isTruck,
  isVehicle,
  VehicleSchema,
  TruckSchema,
} from "./extending-schemas";

describe("extending schemas", () => {
  it("should test the types", () => {
    const vehicle = {
      color: "black",
      numberOfSeats: 2,
      fuelType: "diesel",
      transmission: "manual",
    };

    expect(isTruck(vehicle)).toEqual(false);
    expect(isVehicle(vehicle)).toEqual(true);

    const truck = {
      color: "black",
      numberOfSeats: 2,
      fuelType: "diesel",
      transmission: "manual",
      numberOfAxles: 2,
    };

    expect(isVehicle(truck)).toEqual(true);
    expect(isTruck(truck)).toEqual(true);
  });

  it("should test the values", () => {
    const vehicle: Vehicle = {
      color: "black",
      fuelType: "diesel",
      numberOfSeats: 2,
      transmission: "manual",
    };

    expect(() => VehicleSchema.parse(vehicle)).not.toThrow();
    expect(() => TruckSchema.parse(vehicle)).toThrow(
      "Number of axles is required"
    );
  });
});
