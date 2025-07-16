import * as Haiku from '$lib/Haiku'
import * as Jobs from '$lib/Jobs'

console.log('Registering cron jobs')

// Jobs.registerCronJob('job1', '*/10 * * * * *', () => {
// 	console.log('every 10 seconds')
// })

// Jobs.registerCronJob('job2', '* * * * *', () => {
// 	console.log('every minute')
// })

// Jobs.registerCronJob('job3', '0 * * * *', () => {
// 	console.log('This runs every hour on the hour')
// })

Jobs.registerCronJob('santokabot', '0 * * * *', () => {
	const poem = Haiku.getPoemPost()
	const post = Jobs.sendPosts(poem)

	console.log(post)
})

if (import.meta.hot) {
	import.meta.hot.dispose(Jobs.clearCronJobs) // Why tf doesn't this work 😭
}
