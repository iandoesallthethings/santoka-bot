import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import * as Haiku from '$lib/Haiku'
import * as Mastodon from '$lib/Mastodon'
import * as Twitter from '$lib/Twitter'
import * as Bluesky from '$lib/Bluesky'

export async function GET({ request }) {
	const shouldPost = request.headers.get('Authorization')?.split(' ')[1] === env.CRON_SECRET

	const { text, translator } = Haiku.random()

	const post = `${text}\n\n(Translated by ${translator})`

	if (!shouldPost) {
		return new Response(post)
	}

	console.log('Posting:', post)

	const [bsky, toot, tweet] = await Promise.all([
		Bluesky.post(post),
		Mastodon.post(post),
		Twitter.post(post),
	])

	return json({ toot, tweet, bsky })
}
