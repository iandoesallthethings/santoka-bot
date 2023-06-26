<script lang="ts">
	import readme from '../../README.md?raw'
	import Markdown from '@magidoc/plugin-svelte-marked'
</script>

<Markdown source={readme} />
