import { z } from "zod";

export const Tags = [
  "HANDMADE",
  "ECO",
  "LEATHER",
  "FUR",
  "IRON",
  "CERAMIC",
] as const;
export type Tag = (typeof Tags)[number];

export const Materials = ["STEEL", "LEATHER", "GLASS", "THREADS"] as const;
export type Material = (typeof Materials)[number];

export const Colors = [
  "RED",
  "GREEN",
  "YELLOW",
  "PURPLE",
  "BLACK",
  "WHITE",
] as const;
export type Color = (typeof Colors)[number];

export const Categories = ["PICTURE", "SHOES", "WALLET", "CARPET"] as const;
export type Category = (typeof Categories)[number];

export const productZod = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  shop: z.object({
    id: z.number(),
    name: z.string(),
    logo: z.string().nullable(),
    rating: z.number(),
  }),

  // editable
  name: z.string().min(2).max(20),
  price: z.number().min(1).max(12),
  description: z.string().max(300).optional(),
  images: z.array(z.string()),
  tags: z.array(z.enum(Tags)).optional(),
  materials: z.array(z.enum(Materials)).optional(),
  colors: z.array(z.enum(Colors)).optional(),
  size: z.number().optional(),
  category: z.enum(Categories).or(z.literal("")),
  inStock: z.number(),
});

export type Product = z.infer<typeof productZod>;

export const updateProductZod = productZod.omit({
  createdAt: true,
  updatedAt: true,
  shop: true,
});

export type UpdateProduct = z.infer<typeof updateProductZod>;

export const createProductZod = updateProductZod.omit({ id: true });

export type CreateProduct = z.infer<typeof createProductZod>;
