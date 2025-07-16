import schedule from 'node-schedule'

export { default as sendPosts } from './sendPost'

let jobs: { name: string; job: schedule.Job }[] = []

export function registerCronJob(name: string, spec: string, callback: () => void) {
	console.log(`Registering cron job ${name} with spec ${spec}`)
	jobs.push({ name, job: schedule.scheduleJob(spec, callback) })
}

export function clearCronJobs() {
	console.log('Clearing cron jobs')
	jobs.forEach(({ job }) => job.cancel())
	jobs = []
}
