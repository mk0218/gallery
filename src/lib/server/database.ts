import { neon } from '@neondatabase/serverless';

export async function getCategories() {
	const sql = neon(process.env.DATABASE_URL!);
	const result = await sql`SELECT DISTINCT(category) FROM images;`;
	return result.map((r) => r.category);
}
