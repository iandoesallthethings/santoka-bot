import { json, text } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import * as Promises from '$lib/Promises'
import * as Haiku from '$lib/Haiku'
import * as Mastodon from '$lib/Mastodon'
import * as Twitter from '$lib/Twitter'
import * as Bluesky from '$lib/Bluesky'

export async function GET({ request }) {
	const poem = Haiku.get()
	const post = Haiku.englishPost(poem)

	const shouldPost = request.headers.get('Authorization')?.split(' ')[1] === env.CRON_SECRET
	if (!shouldPost) return text(post, { headers: { 'Content-Type': 'text/plain' } })

	console.log('POSTING\n\n', post)

	const results = await Promises.runParallelJobs({
		Bluesky: Bluesky.post(post),
		Mastodon: Mastodon.post(post),
		Twitter: Twitter.post(post),
	})

	console.log('Results\n\n', results)

	return json(results)
}
