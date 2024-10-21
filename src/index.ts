import 'dotenv/config'
import './controllers/';
import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from "@fastify/swagger-ui";
import { health, questions, recommendedProducts } from './routes/';

const app = fastify({
    logger: true
})

const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};

app.register(fastifySwagger);
app.register(fastifySwaggerUi, swaggerUiOptions);
app.register(health);
app.register(questions);
app.register(recommendedProducts);

const start = async () => {
    app.listen({port: 8080}, (err, address) => {
        if(err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    });
}

start();

export { app };