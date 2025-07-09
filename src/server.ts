import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from '../env.ts';
import { public_routes } from './http/public-routes.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
    return 'OK';
});

app.register(public_routes.getRoomsRoute);
app.register(public_routes.createRoomsRoute);

app.listen({ port: env.PORT }).then(() => {
    // biome-ignore lint/suspicious/noConsole: dev
    console.log(`Server is running on http://localhost:${env.PORT}`)
});
