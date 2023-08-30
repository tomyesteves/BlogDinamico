import fp from 'fastify-plugin'
import fastify from 'fastify';
import formbody from '@fastify/formbody';

export default fp(async function (fastify, opts) {
    fastify.register(formbody);
})
