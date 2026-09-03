<script>
  import Searchbar from "$lib/Searchbar.svelte";
  import Card from "$lib/Card.svelte";

    let { data } = $props();
    let squad = $derived(data.squad[0]);

    console.log(squad);
  const { data } = $props();
  let squad = data.squad[0];

  // carousel
  let carousel;
  let isDown = false;
  let startX;
  let scrollLeft;
  let hasDragged = false;

  function handleMouseDown(e) {
    isDown = true;
    hasDragged = false;
    startX = e.pageX;
    scrollLeft = carousel.scrollLeft;
    e.preventDefault();
  }

  function handleMouseMove(e) {
    if (!isDown) return;
    const diff = e.pageX - startX;
    if (Math.abs(diff) > 3) hasDragged = true;
    carousel.scrollLeft = scrollLeft - diff;
  }

  function handleMouseUp() {
    isDown = false;
  }

  function handleWheel(e) {
    if (!carousel) return;
    if (window.innerWidth < 1168) return;
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  }
</script>

<main>
  <!-- {#each squad.persons as persons}
  {@const person = persons.person_id}
  <p>{person.name}</p>
{/each} -->

  <section
    class="carousel"
    bind:this={carousel}
    onmousedown={handleMouseDown}
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
    onmouseleave={handleMouseUp}
    onwheel={handleWheel}
  >
    {#each squad.persons as member}
      <Card person={member.person_id} />
    {/each}
  </section>
  <Searchbar />
</main>

<style>
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .carousel {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    scrollbar-width: none;
    margin-bottom: 10rem;

    @media (min-width: 576px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (min-width: 1168px) {
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: flex-start;
      cursor: grab;
      align-items: flex-end;
    }
  }

{#if data.isSearch}
    <p>Results for: "{data.query}"</p>
{/if}

{#each squad.persons as person}
    <Card
        name={person.person_id.name}
        link={person.person_id.profilecard}
        mugshot={person.person_id.mugshot}
    />
{/each}
  .dragging {
    cursor: grabbing;
  }
</style>
