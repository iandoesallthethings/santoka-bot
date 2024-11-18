import { env } from '$env/dynamic/private'
import { AtpAgent } from '@atproto/api'

export const client = new AtpAgent({
	service: 'https://bsky.social',
})

export async function post(text: string) {
	if (!env.BLUESKY_USERNAME || !env.BLUESKY_PASSWORD) {
		throw new Error('Missing Bluesky credentials')
	}

	await client.login({
		identifier: env.BLUESKY_USERNAME,
		password: env.BLUESKY_PASSWORD,
	})

	return await client.post({ text })
}
