import { json, text } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import * as Haiku from '$lib/Haiku'
import * as Jobs from '$lib/Jobs'

export async function GET({ request }) {
	const post = Haiku.getPoemPost()

	const headerSecret = request.headers.get('Authorization')?.split(' ')[1]
	const isCron = headerSecret === env.CRON_SECRET

	if (isCron) {
		const results = await Jobs.sendPosts(post)
		return json(results)
	}

	// If the request isn't from a cron job, just return the post
	return text(post, { headers: { 'Content-Type': 'text/plain' } })
}
