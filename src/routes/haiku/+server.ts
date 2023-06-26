import { env } from '$env/dynamic/private'
import * as Haiku from '$lib/Haiku'
import * as Mastodon from '$lib/Mastodon'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
	// const shouldPost = url.searchParams.get('secret') === env.CRON_SECRET

	const haiku = Haiku.random()
	console.log('Got haiku:', haiku)

	// if (!shouldPost) {
	// 	return new Response(haiku)
	// }

	const response = await Mastodon.post(haiku)

	console.log(response)

	return json(response)
}
