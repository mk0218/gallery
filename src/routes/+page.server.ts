import type { PageServerLoad } from './$types';
import { getCategories } from '$lib/server/database';

export const load: PageServerLoad = async () => {
	return { categories: await getCategories() };
};
