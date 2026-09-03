<script>
	import favicon from "$lib/assets/favicon.svg";
	import Background from "$lib/Background.svelte";
	let { children } = $props();
</script>

<Background />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
