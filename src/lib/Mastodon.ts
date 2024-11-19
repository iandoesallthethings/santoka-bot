import { createRestAPIClient } from 'masto'
import { env } from '$env/dynamic/private'

export const client = await createRestAPIClient({
	url: env.MASTODON_URL,
	accessToken: env.MASTODON_TOKEN,
})

export async function post(status: string) {
	try {
		return await client.v1.statuses.create({
			status,
			visibility: 'public',
		})
	} catch (error) {
		console.error('Mastodon post failed', error)
	}
}
