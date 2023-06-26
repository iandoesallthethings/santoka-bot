<script lang="ts">
	import readme from '../../README.md?raw'
	import Markdown from '@magidoc/plugin-svelte-marked'

	export const prerender = true
</script>

<Markdown source={readme} />
