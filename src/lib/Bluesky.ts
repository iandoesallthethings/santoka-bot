import { env } from '$env/dynamic/private'
import { AtpAgent } from '@atproto/api'

export const client = new AtpAgent({ service: 'https://bsky.social' })

await client.login({
	identifier: env.BLUESKY_USERNAME,
	password: env.BLUESKY_PASSWORD,
})

export async function post(text: string) {
	return await client.post({ text })
}
