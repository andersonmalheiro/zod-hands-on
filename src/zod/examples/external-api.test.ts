import { fetchRandomPerson, isPerson } from "./external-api";

describe("External API", () => {
  it("should return the data", async () => {
    const result = await fetchRandomPerson();

    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("gender");
    expect(isPerson(result)).toEqual(true);
  });
});
