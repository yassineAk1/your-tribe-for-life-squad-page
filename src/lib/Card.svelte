<script>
  // Alleen deze drie namen bestaan hierbinnen, verder niets.
  let { id, name, img } = $props();
</script>

<article>
  <picture>
    <img
      src="https://fdnd.directus.app/assets/{img}?format=webp"
      loading="lazy"
      alt={name}
    />
  </picture>
  <a href="/person/{id}">
    <h2>{name}</h2>
    <svg
      width="10"
      height="10"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00001 14.6699L14.3914 1.27857M14.6704 13.275L14.3914 1.27857L2.39494 0.999588"
        // stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</article>

<style>
  svg {
    stroke: var(--color-primary);
  }

  article {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    transition: all var(--animation-duration) ease;

    @media (min-width: 600px) {
      width: 268px;
    }
    @media (min-width: 1168px) {
      &:hover {
        width: 350px;
        transition: all var(--animation-duration) ease;
      }
    }

    img {
      width: 100%;
      aspect-ratio: 5/6;
      object-fit: cover;
    }

    h2 {
      font-size: 0.9rem;
      word-break: break-word;
    }
    a {
      display: flex;
      color: var(--color-primary);
      flex-direction: row;
      justify-content: space-between;
      gap: 0.7em;
      text-decoration: none;
      align-items: center;
      border: solid var(--color-primary) 1px;
      padding: 8px;
    }
  }
</style>
