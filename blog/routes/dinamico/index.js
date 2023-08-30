import { indexData } from '../../templates/data/indexData.js'
import { aboutMeData } from '../../templates/data/aboutMe.js'
import { formData } from '../../templates/data/form.js'
import { addPost } from '../../crud/addPost.js'

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return reply.view("templates/views/index.ejs", { indexData })
    });

    fastify.get('/aboutme', async function (request, reply) {
        return reply.view("templates/views/aboutme.ejs", { aboutMeData })
    });

    fastify.get('/post', async function (request, reply) {
        return reply.view("templates/views/form.ejs", { formData })
    });

    fastify.post('/post', async function (request, reply) {
        const newPost = {
            title: request.body.titulo,
            content: request.body.contenido,
            author: request.body.autor
        }
        indexData.articles.push(newPost);
        console.log("Antes de guardar en la bd");
        addPost(newPost.title, newPost.content, request.body.imagen, newPost.author);
        console.log("Despues de guardar en la bd");
        return reply.redirect('/dinamico');
    });
}
