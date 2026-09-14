<script>
	import favicon from "$lib/assets/favicon.svg";
	import Background from "$lib/Background.svelte";
	import { onNavigate } from "$app/navigation";
	let { children } = $props();

	// View transition tussen overzicht en detailpagina.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Background />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
