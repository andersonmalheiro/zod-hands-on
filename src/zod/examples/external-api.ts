import axios from "axios";
import { z } from "zod";

const PersonSchema = z.object({
  name: z.object({
    first: z.string(),
    last: z.string(),
  }),
  gender: z.string(),
});

type Person = z.infer<typeof PersonSchema>;

export function isPerson(value: any): value is Person {
  return value.hasOwnProperty("gender") && value.hasOwnProperty("name");
}

const ResponseSchema = z.object({
  results: z.array(PersonSchema),
});

export async function fetchRandomPerson() {
  const { data } = await axios.get("https://randomuser.me/api/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("response", JSON.stringify(data, null, 2));

  const parsedResponse = ResponseSchema.parse(data);

  console.log("parsed", JSON.stringify(parsedResponse, null, 2));

  return parsedResponse.results[0];
}
