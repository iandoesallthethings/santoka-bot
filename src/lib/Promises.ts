interface Result<T> {
	status: 'fulfilled' | 'rejected'
	value?: T
	error?: any
}
type JobsInput = { [key: string]: Promise<any> }
type JobResult<J extends JobsInput> = Result<Awaited<J[keyof J]>>
type JobsResults<J extends JobsInput> = { [Name in keyof J]?: JobResult<J> }

/**
 * Runs a set of promises in parallel and returns the results.
 * @param jobs JobsInput { [JobName]: Promise }
 * @returns Results { [JobName]: Result }
 * @example
 * const results = await runParallelJobs({
 *    One: Promise.resolve('result-one'),
 *    Two: Promise.resolve('result-two'),
 *    Three: Promise.reject('Error: Three job failed'),
 * })
 * console.debug(results)
 * // {
 * //   One: { status: 'fulfilled', value: 'result-one' },
 * //   Two: { status: 'fulfilled', value: 'result-two' },
 * //   Three: { status: 'rejected', reason: 'Error: Three job failed' }
 * // }
 */
export async function runParallelJobs<J extends JobsInput>(jobs: J) {
	const names = Object.keys(jobs) as (keyof J)[]
	const promises = Object.values(jobs) as J[keyof J][]

	const results = await Promise.allSettled(promises)

	// Reshape the results into { [JobName]: Result }
	return results.reduce<JobsResults<J>>((acc, result, index) => {
		const jobName = names[index]

		if (result.status === 'rejected') {
			const jobName = names[index].toString()
			console.error(`[${jobName} failed]`, result.reason)
		}

		acc[jobName] = result
		return acc
	}, {})
}
