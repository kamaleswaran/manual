import { FastifyInstance } from "fastify";

export const health = (fastify: FastifyInstance) => {
    fastify.get('/health', {
        schema: {
            tags: ['health-check'],
            response: {
                200: {}
            }
        },
        handler: async (request, reply) => {
            return 'ping';
        }
    })
}
