import { parseUser, UserOutput } from "./schema-type";

describe("Schema test", () => {
  it("should throw an error when parsing the age", () => {
    const mockUser = {
      age: 12,
      name: "John",
      email: "john@email.com",
    };

    expect(() => parseUser(mockUser)).toThrowError(
      "Age must not be less than 18"
    );
  });

  it("should throw an error when parsing the email", () => {
    const mockUser = {
      age: 18,
      name: "John",
      email: "john@email",
    };

    expect(() => parseUser(mockUser)).toThrowError(
      "Provided email is not valid"
    );
  });

  it("should return the object without extra attributes", () => {
    const mockUser = {
      age: 18,
      name: "John",
      email: "john@email.com",
      address: "Main St, 18",
    };

    const result = parseUser(mockUser);

    expect(result).not.toHaveProperty("address");
    expect(result).toMatchObject(
      expect.objectContaining({
        age: 18,
        name: "John",
        email: "john@email.com",
      })
    );
  });
});
