import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export async function handle({ event, resolve }) {
	if (event.url.pathname !== `${base}/`) {
		throw redirect(308, `${base}/`);
	}
	return await resolve(event);
}
