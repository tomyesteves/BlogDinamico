import { aboutMeData } from '../../templates/data/aboutMe.js'
import { formData } from '../../templates/data/form.js'
import { addPost } from '../../crud/addPost.js'
import { getPosts } from '../../crud/getPosts.js'

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        const articles = await getPosts();
        return reply.view("templates/views/index.ejs", { articles })
    });

    fastify.get('/aboutme', async function (request, reply) {
        return reply.view("templates/views/aboutme.ejs", { aboutMeData })
    });

    fastify.get('/post', async function (request, reply) {
        return reply.view("templates/views/form.ejs", { formData })
    });

    fastify.post('/post', async function (request, reply) {
        console.log("requestbody", request.body);
        const newPost = {
            title: request.body.titulo,
            description: request.body.descripcion,
            img: request.body.imagen,
            alt: request.body.alternativo,
            body: request.body.cuerpo,
            author: request.body.autor
        };
        console.log("newpost", newPost)
        addPost(newPost.title, newPost.description, newPost.img, newPost.alt, newPost.body, newPost.author);
        return reply.redirect('/dinamico');
    });
}
