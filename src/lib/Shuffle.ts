import shuffle from 'knuth-shuffle-seeded'

/**
 * Similar to the monthly algorithm, but derives the shuffle seed from the current
 * epoch time rather than the month. That way we don't have to worry about repeats
 * or missing poems.
 */
export function epoch<T>(array: T[]) {
	const arrayCopy = [...array] // In case state persists between serverless runs.

	const { cycle, hour } = cycleAndIndex(arrayCopy.length)
	const shuffled = shuffle(arrayCopy, cycle)

	return shuffled[hour]
}

function cycleAndIndex(length: number) {
	const timestamp = Date.now()

	const hoursSinceEpoch = Math.floor(timestamp / HOUR)
	const cycle = Math.floor(hoursSinceEpoch / length) // Which cycle we are in
	const hour = hoursSinceEpoch % length // Hour within the cycle

	return { cycle, hour }
}

export function naiveRandom<T>(array: T[]) {
	return array[Math.floor(Math.random() * array.length)]
}

const HOUR = 1000 * 60 * 60
