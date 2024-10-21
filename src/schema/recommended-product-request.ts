import { Static, Type } from "@sinclair/typebox";

export const RecommendedProductRequestSchema = Type.Array(Type.Object({
    id: Type.Number(),
    selectedOptionId: Type.Number()
}));

export type RecommendedProductRequestSchemaType = Static<typeof RecommendedProductRequestSchema>