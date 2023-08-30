import { pool } from '../dbconnection.js'

export async function addPost(title, contentlines, img, author) {
    console.log("trace 1");
    try {
        console.log("trace 2");
        console.log(pool);
        const result = await pool.query(
            `INSERT INTO posts
            (title, contentlines, img, author)
            VALUES ($1, $2, $3, $4) RETURNING *;`,
            [title, contentlines, img, author]
        );
        console.log("trace 3");
        return result.rows[0];
    } catch (err) {
        console.log("ERROR -> " + err.message)
        return null;
    }
}
