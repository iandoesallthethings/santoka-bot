import { TwitterApi } from 'twitter-api-v2'
import { env } from '$env/dynamic/private'

export const client = new TwitterApi({
	appKey: env.TWITTER_APP_KEY,
	appSecret: env.TWITTER_APP_SECRET,
	accessToken: env.TWITTER_ACCESS_TOKEN,
	accessSecret: env.TWITTER_ACCESS_SECRET,
}).readWrite

export async function post(text: string) {
	return await client.v2.tweet({ text })
}
