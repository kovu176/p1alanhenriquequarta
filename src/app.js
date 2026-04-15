import Fastify from 'fastify';
import { getCepHandler } from './controllers/cepController.js';

const fastify = Fastify({ logger: true });

// Definição da rota
fastify.get('/cep/:cep', getCepHandler);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();