<script>
  import Searchbar from "$lib/Searchbar.svelte";
  import Card from "$lib/Card.svelte";

  const { data } = $props();
  let squad = data.squad[0];

  // carousel
  let carousel;
  let isDown = false;
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

  .dragging {
    cursor: grabbing;
  }
</style>
