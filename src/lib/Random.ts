import shuffle from 'knuth-shuffle-seeded'

export function naive<T>(array: T[]) {
	return array[Math.floor(Math.random() * array.length)]
}

/*
 * Currently, this collection of santoka poems will last
 * about 25ish days posting hourly. So if we just shuffle
 * the array differently each month, we should get a solidly
 * random, non repeating sequence.
 */
export function knuth<T>(array: T[]) {
	const arrayCopy = [...array] // In case state persists between serverless runs.

	const seed = currentMonth()
	const index = hoursSinceStartOfMonth()

	return shuffle(arrayCopy, seed)[index]
}

function currentMonth() {
	const date = new Date()
	return date.getMonth()
}

function hoursSinceStartOfMonth() {
	const currentDate = new Date()
	const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
	const hours = (currentDate.getTime() - startOfMonth.getTime()) / (1000 * 60 * 60)

	return Math.floor(hours)
}
