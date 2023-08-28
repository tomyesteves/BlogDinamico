import { indexData } from '../templates/data/indexData.js'
import { aboutMeData } from '../templates/data/aboutMe.js'

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply.view("templates/views/index.ejs", { indexData })
  })

  fastify.get('/aboutme', async function (request, reply) {
    return reply.view("templates/views/aboutme.ejs", { aboutMeData })
  })

  fastify.get('/gotoindex', async (request, reply) => {
    reply.redirect('/');
  });

  fastify.get('/gotocv', async (request, reply) => {
    reply.redirect('/aboutme');
  });
}
