import { DATABASE_URL } from '$env/static/private';
import { neon } from '@neondatabase/serverless';

export async function getCategories() {
	const sql = neon(DATABASE_URL);
	const result = await sql`SELECT DISTINCT(category) FROM images;`;
	return result.map((r) => r.category);
}

export async function getImgUrlByCategories(categories: string[]) {
	const sql = neon(DATABASE_URL);
	const result = await sql`
		SELECT url FROM images
		WHERE category = ANY(${categories})
	`;
	return result.map((r) => r.url);
}
