<script>
  const { person } = $props();
  function isImageUrl(url) {
    if (!url) return false;
    return url.match(/\.(webp|png|jpg|jpeg|gif)(\?.*)?$/i);
  }

  const avatar = isImageUrl(person.avatar)
    ? person.avatar
    : "https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg";
</script>

<article>
  <picture>
    <img src={avatar} alt={person.name} />
  </picture>
  <a href="#">
    <h2>{person.name}</h2>
    <svg
      width="10"
      height="10"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00001 14.6699L14.3914 1.27857M14.6704 13.275L14.3914 1.27857L2.39494 0.999588"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</article>

<style>
  svg {
    stroke: #dfcfba;
  }
  article {
    display: flex;
    flex-direction: column;
    width: 268px;
    overflow: hidden;
    flex-shrink: 0;

    &:hover {
    }

    img {
      width: 100%;
      aspect-ratio: 5/6;
      object-fit: cover;
      transition: zoom 0.3s ease-out;

      @media (any-pointer: fine) {
        &:hover {
          zoom: 1.2;
          border: 3px ridge #a4a4a4;
        }
      }
    }

    h2 {
      font-size: 0.9rem;
      word-break: break-word;
    }
    a {
      display: flex;
      color: white;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.7em;
      text-decoration: none;
      align-items: center;
      border: solid white 1px;
      padding-inline: 8px;
    }
  }
</style>
