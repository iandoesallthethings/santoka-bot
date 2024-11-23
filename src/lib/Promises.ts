interface Result<T> {
	status: 'fulfilled' | 'rejected'
	value?: T
	error?: any
}
type Jobs = { [key: string]: Promise<any> }
type AwaitedJob<J extends Jobs> = Result<Awaited<J[keyof J]>>
type Results<J extends Jobs> = { [Name in keyof J]?: AwaitedJob<J> }

export async function parallelJobs<J extends Jobs, Name extends keyof J>(
	jobs: J
): Promise<Results<J>> {
	type JobWithName = { name: Name } & AwaitedJob<J>

	const results = await Promise.allSettled(
		Object.entries(jobs).map(([name, promise]) =>
			promise.then(
				(value) => ({ name, status: 'fulfilled', value }),
				(error) => {
					console.error(`${name} post failed.`, error)
					return { name, status: 'rejected', error }
				}
			)
		)
	)

	return results.reduce<Results<J>>((acc, result) => {
		const { name, status, value, error } = result as JobWithName
		acc[name] =
			status === 'fulfilled' ? { status: 'fulfilled', value } : { status: 'rejected', error }
		return acc
	}, {})
}
