import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import * as Promises from '$lib/Promises'
import * as Haiku from '$lib/Haiku'
import * as Mastodon from '$lib/Mastodon'
import * as Twitter from '$lib/Twitter'
import * as Bluesky from '$lib/Bluesky'

export async function GET({ request }) {
	const post = Haiku.format(Haiku.random())

	const shouldPost = request.headers.get('Authorization')?.split(' ')[1] === env.CRON_SECRET
	if (!shouldPost) {
		return new Response(post)
	}

	console.log('Posting:', post)

	const results = await Promises.parallelJobs({
		Bluesky: Bluesky.post(post),
		Mastodon: Mastodon.post(post),
		Twitter: Twitter.post(post),
	})

	return json(results)
}
