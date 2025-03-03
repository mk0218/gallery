/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to an R2 bucket
	R2_BUCKET: R2Bucket;
}

async function GET(url: URL, env: Env) {
	const imagePath = url.pathname.slice(1); // Remove leading slash
	// const resizeOptions = url.searchParams.get('resize'); // e.g., "width=100&height=100"

	const object = await env.R2_BUCKET.get(imagePath);

	if (!object) {
		return new Response('Image not found', { status: 404 });
	}

	const headers = new Headers();
	object.writeHttpMetadata(headers);
	headers.set('etag', object.httpEtag);

	return new Response(object.body, { headers });
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (request.method === 'GET') {
			return await GET(url, env);
		}

		return new Response('Method not allowed', {
			status: 405,
			headers: { Allow: 'GET' },
		});
	},
} satisfies ExportedHandler<Env>;
