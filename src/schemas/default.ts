import { z } from "zod";

export const defaultSchema = z.object({
  id: z.bigint().positive().transform((val) => val.toLocaleString())
});