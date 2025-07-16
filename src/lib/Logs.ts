import dedent from 'ts-dedent'

export function pretty(heading: string, stuff: string) {
	const log = dedent`
        ${'='.repeat(heading.length)}
        ${heading}
        ${stuff}
        ${'='.repeat(heading.length)}
    `

	console.log(log)
}
