import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL ?? '';

export async function getCategories() {
	const sql = neon(DATABASE_URL);
	const result = await sql`SELECT DISTINCT(category) FROM images;`;
	return result.map((r) => r.category);
}
