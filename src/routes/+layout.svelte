<script>
	import favicon from "$lib/assets/favicon.svg";
	import Background from "$lib/Background.svelte";
	import { onNavigate } from "$app/navigation";

	// zorgt ervooor dat layout alle info op de huidige pagina krijgt
	import {page} from "$app/state";
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

 <!-- geeft de achtergrondkleur van de persoon mee aan de background component zodat de kleur verandert bij het navigeren naar een detailpagina -->
<Background color={page.data.person?.fav_color}/>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
