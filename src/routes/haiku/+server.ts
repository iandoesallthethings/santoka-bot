import { env } from '$env/dynamic/private'
import * as Haiku from '$lib/Haiku'
import * as Mastodon from '$lib/Mastodon'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
	const shouldPost = url.searchParams.get('secret') === env.CRON_SECRET

	const { text, translator } = Haiku.random()

	const post = `${text}\n\n(Translated by ${translator})`

	if (!shouldPost) {
		return new Response(post)
	}

	const response = await Mastodon.post(post)

	return json(response)
}
