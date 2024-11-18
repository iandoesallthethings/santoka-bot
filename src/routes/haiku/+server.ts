import { error, json } from '@sveltejs/kit'
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

	const toot = await Mastodon.post(post)
	const tweet = await Twitter.post(post)
	const bsky = await Bluesky.post(post)

	if (!toot || !tweet || !bsky) {
		throw error(500, JSON.stringify({ toot, tweet }))
	}

	return json({ toot, tweet })
}
