import { env } from '$env/dynamic/private'
import { BskyAgent } from '@atpronto/api'

export const client = new BskyAgent({
	service: 'https://bsky.social',
})

export async function post(text: string) {
	await client.login({
		identifier: env.BLUESKY_USERNAME,
		password: env.BLUESKY_PASSWORD,
	})

	return await client.post({ text })
}
