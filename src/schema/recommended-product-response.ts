import { Static, Type } from "@sinclair/typebox";

export const RecommendedProductResponseSchema = Type.Array(Type.Object({
    id: Type.Number(),
    name: Type.String()
}));

export type RecommendedProductResponseSchemaType = Static<typeof RecommendedProductResponseSchema>