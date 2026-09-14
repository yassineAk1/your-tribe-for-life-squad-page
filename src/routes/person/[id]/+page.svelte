<script>
	import { imagesrc, fallbacksrc } from "$lib/imagesrc.js"

	let { data } = $props()
	let person = $derived(data.person)
	let src = $derived(imagesrc(person.avatar, person.mugshot))

	function handleError() {
		src = fallbacksrc(src, person.avatar, person.mugshot)
	}
</script>

<svelte:head>
	<title>{person.name}</title>
</svelte:head>

<main>
	<article style="view-transition-name: person-{person.id}">
		<a class="back" href="/">
			<svg width="8" height="8" viewBox="0 0 16 16" fill="none" aria-hidden="true">
				<path d="M15 8H1M1 8L8 1M1 8L8 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			Back
		</a>

		<img
			{src}
			alt="foto van {person.name}"
			onerror={handleError}
			style="view-transition-name: person-img-{person.id}"
		/>

		<div class="info">
			<h1 style="view-transition-name: person-name-{person.id}">{person.name}</h1>

			<div class="meta">
				{#if person.github_handle}
					<a class="handle" href="https://github.com/{person.github_handle}">@{person.github_handle}</a>
				{/if}

				{#if person.profilecard}
					<a class="button" href={person.profilecard}>
						Profile card
						<svg width="8" height="8" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path
								d="M1.00001 14.6699L14.3914 1.27857M14.6704 13.275L14.3914 1.27857L2.39494 0.999588"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				{/if}
			</div>

			<dl>
				<div>
					<dt>Bio:</dt>
					<dd>{person.bio ?? "-"}</dd>
				</div>
				<div>
					<dt>Fav_tag:</dt>
					<dd>{person.fav_tag ?? "-"}</dd>
				</div>
			</dl>
		</div>
	</article>
</main>

<style>
	main {
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	article {
		--card-bg: var(--color-primary);
		--card-fg: var(--color-background);

		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
		width: 100%;
		max-width: 22rem;
		padding: 0.75rem;
		background: var(--card-bg);
		color: var(--card-fg);
		text-transform: uppercase;

		@media (min-width: 576px) {
			max-width: 36rem;
			grid-template-columns: 11rem 1fr;
			grid-template-rows: auto 1fr;
		}
	}

	svg {
		stroke: var(--card-fg);
	}

	a {
		color: var(--card-fg);
		text-decoration: none;
	}

	.back,
	.button,
	dl > div {
		border: 1px solid var(--card-fg);
	}

	.back {
		grid-column: 1 / -1;
		justify-self: start;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.25rem 0.35rem;
		font-size: 0.6rem;
		opacity: 0.6;
		transition: opacity var(--animation-duration) ease;

		&:hover,
		&:focus-visible {
			opacity: 1;
		}
	}

	img {
		width: 100%;
		aspect-ratio: 5 / 6;
		object-fit: cover;
		border: 1px solid var(--card-fg);
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-width: 0;
	}

	h1 {
		font-size: 1.1rem;
		letter-spacing: 0.05em;
		padding: 0.75rem 0 0 0.5rem;
		word-break: break-word;

		@media (min-width: 576px) {
			margin-bottom: auto;
		}
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.65rem;
	}

	.handle {
		padding-left: 0.5rem;

		&:hover,
		&:focus-visible {
			text-decoration: underline;
		}
	}

	.button {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.3rem 0.4rem;
		transition: background var(--animation-duration) ease, color var(--animation-duration) ease;

		&:hover,
		&:focus-visible {
			background: var(--card-fg);
			color: var(--card-bg);

			svg {
				stroke: var(--card-bg);
			}
		}
	}

	dl {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.65rem;

		> div {
			display: flex;
			gap: 0.5ch;
			padding: 0.35rem 0.5rem;
		}
	}

	dd {
		text-transform: none;
		word-break: break-word;
	}
</style>
