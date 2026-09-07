<script>
	let { data } = $props()
	let person = $derived(data.person)
</script>

	<h1>{person.name}</h1>

<main>
	<a class="back" href="/">Terug</a>

	<article>
		<img
			src="https://fdnd.directus.app/assets/{person.mugshot}?format=webp"
			alt="foto van {person.name}"
		/>

		<h1>{person.name}</h1>

		{#if person.bio}
			<p>{person.bio}</p>
		{/if}

		{#if person.profilecard}
			<a href={person.profilecard}>Bekijk mijn visietekaartje</a>
		{/if}
	</article>
</main>

<style>
	main {
		max-width: 40rem;
		margin-inline: auto;
		padding: 1rem;
	}

	a {
		color: var(--color-primary);
	}

	.back {
		display: inline-block;
		margin-bottom: 1rem;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	img {
		width: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>
