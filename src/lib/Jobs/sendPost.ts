import * as Promises from '$lib/Promises'
// import * as Mastodon from '$lib/Mastodon'
// import * as Twitter from '$lib/Twitter'
import * as Bluesky from '$lib/Bluesky'
import * as Logs from '$lib/Logs'

export default async function sendPosts(copy: string) {
	Logs.pretty('Posting', copy)

	const results = await Promises.runParallelJobs({
		Bluesky: Bluesky.post(copy),
		// Mastodon: Mastodon.post(copy),
		// Twitter: Twitter.post(copy),
	})

	Logs.pretty('Results', JSON.stringify(results, null, 2))

	return results
}
