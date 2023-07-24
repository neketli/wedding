import { redirect } from '@sveltejs/kit';
export async function handle({ event, resolve }) {
	if (event.url.pathname !== '/') {
		throw redirect(308, '/');
	}
	return await resolve(event);
}
