import { login } from 'masto'
import { env } from '$env/dynamic/private'

export const client = await login({
	url: env.MASTODON_URL,
	accessToken: env.MASTODON_TOKEN,
})

export async function post(status: string) {
	return await client.v1.statuses.create({
		status,
		visibility: 'public',
	})
}
