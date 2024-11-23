<script>
	import '../app.postcss'
	import { santokaBanner, santokaProfile } from '$lib/Images'
</script>

<enhanced:img src={santokaBanner} alt="Calligraphy by Santōka" class="banner" />

<main class="mx-auto max-w-3xl px-8 pt-16 mb-4 relative">
	<enhanced:img src={santokaProfile} alt="Taneda Santōka" class="profile" />

	<slot />
</main>

<style lang="postcss">
	.banner {
		@apply object-cover max-h-48 w-full;
	}
	.profile {
		@apply absolute top-0 -translate-y-1/2;
		@apply w-32 aspect-square rounded-full object-cover;
		@apply border-4 border-gray-800;
	}
</style>
