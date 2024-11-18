import { TwitterApi } from 'twitter-api-v2'
import { env } from '$env/dynamic/private'

const twitter = new TwitterApi({
	appKey: env.TWITTER_APP_KEY,
	appSecret: env.TWITTER_APP_SECRET,
	accessToken: env.TWITTER_ACCESS_TOKEN,
	accessSecret: env.TWITTER_ACCESS_SECRET,
})

export const client = twitter.readWrite

export async function post(text: string) {
	try {
		return await client.v2.tweet({ text })
	} catch (error) {
		console.error('Twitter post failed', error)
	}
}
