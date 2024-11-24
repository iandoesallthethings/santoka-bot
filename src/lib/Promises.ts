interface Result<T> {
	status: 'fulfilled' | 'rejected'
	value?: T
	error?: any
}
type JobsInput = { [key: string]: Promise<any> }
type JobResult<J extends JobsInput> = Result<Awaited<J[keyof J]>>
type Results<J extends JobsInput> = { [Name in keyof J]?: JobResult<J> }

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
 * //   Three: { status: 'rejected', error: 'Error: Three job failed' }
 * // }
 */
export async function runParallelJobs<J extends JobsInput>(jobs: J): Promise<Results<J>> {
	const names = Object.keys(jobs) as (keyof J)[]
	const promises = Object.values(jobs) as J[keyof J][]

	const results = await Promise.allSettled(promises)

	// Reshape the results into { [JobName]: Result }
	return results.reduce<Results<J>>((acc, result, index) => {
		const jobName = names[index]
		acc[jobName] = result
		return acc
	}, {})
}
