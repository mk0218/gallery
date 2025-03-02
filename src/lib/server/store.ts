import { getDownloadUrl } from '@vercel/blob';

export async function getImage(key: string) {
	return getDownloadUrl(key);
}
