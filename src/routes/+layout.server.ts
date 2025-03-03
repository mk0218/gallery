import type { PageServerLoad } from './$types';
import { getCategories, getImgUrlByCategories } from '$lib/server/database';
import { getImage } from '$lib/server/store';

export const load: PageServerLoad = async () => {
	const categories = await getCategories();
	const keys = await getImgUrlByCategories([categories[0]]);
	const image = await getImage(keys[0]);
	return { categories, keys, image };
};
