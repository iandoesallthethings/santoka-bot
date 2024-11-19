import adapter from '@sveltejs/adapter-vercel'
import { Config } from '@sveltejs/kit'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config: Config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			$types: './src/types.ts',
		},
	},
}

export default config
