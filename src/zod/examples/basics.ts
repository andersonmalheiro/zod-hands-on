import { z } from "zod";

const stringSchema = z.string();
const numberSchema = z.number();
const objectSchema = z.object({});
const booleanSchema = z.boolean();
const literalSchema = z.literal("success");
const enumSchema = z.enum(["success", "error", "warning"]);
const unionSchema = z.union([
  z.literal("success"),
  z.literal("error"),
  z.literal("warning"),
]);
