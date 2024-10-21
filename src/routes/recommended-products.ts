import { FastifyInstance } from "fastify";
import { RecommendedProductRequestSchema, RecommendedProductRequestSchemaType } from "../schema/recommended-product-request";
import { RecommendedProductResponseSchema } from "../schema/recommended-product-response";
import { getRecommendedProducts } from "../controllers";

export const recommendedProducts = (fastify: FastifyInstance) => {
    fastify.post('/recommended-products', {
        schema: {
            tags: ['manual'],
            body: RecommendedProductRequestSchema,
            response: {
                200: RecommendedProductResponseSchema
            }
        },
        handler: async (request, reply) => {
            const selectedOptions = request.body as RecommendedProductRequestSchemaType;
            return await getRecommendedProducts(selectedOptions);
        }
    });
}
