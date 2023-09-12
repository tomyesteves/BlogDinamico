import { pool } from '../dbconnection.js'

export async function addPost(title, description, img, alt, body, author) {
    try {
        const result = await pool.query(
            `INSERT INTO posts
            (title, description, img, alt, body, author)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
            [title, description, img, alt, body, author]
        );
        return result.rows[0];
    } catch (err) {
        console.log("ERROR -> " + err.message);
        return null;
    }
}
