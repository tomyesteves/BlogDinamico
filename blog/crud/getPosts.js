import { pool } from '../dbconnection.js'

export async function getPosts() {
    try {
        const result = await pool.query(`SELECT * FROM posts;`);
        const articles = result.rows.map(row => ({
            titulo: row.title,
            descripcion: row.description,
            imagen: row.img,
            alt: row.alt,
            cuerpo: row.body,
            autor: row.author
        }));
        return articles;
    } catch (err) {
        console.log("ERROR -> " + err.message);
        return null;
    }
}
