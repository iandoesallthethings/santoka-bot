import { env } from '$env/dynamic/private'
import * as Haiku from '$lib/Haiku'
import * as Mastodon from '$lib/Mastodon'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
	const shouldPost = url.searchParams.get('secret') === env.CRON_SECRET

	const haiku = Haiku.random()

	const post = `${haiku.text}\n\n(Translated by ${haiku.translator})`

	if (!shouldPost) {
		return new Response(post)
	}

	const response = await Mastodon.post(post)

	return json(response)
}
