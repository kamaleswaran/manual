import { FastifyInstance } from "fastify";
import { QuestionsResponseSchema } from "../schema/questions-response";
import { getRecommendedProductQuestions } from "../controllers";

export const questions = (fastify: FastifyInstance) => {
    fastify.get('/questions', {
        schema: {
            tags: ['manual'],
            response: {
                200: QuestionsResponseSchema
            }
        },
        handler: async (request, reply) => {
            return await getRecommendedProductQuestions();
        }
    })
}
