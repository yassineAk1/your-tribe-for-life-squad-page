<script>
    import Searchbar from "$lib/Searchbar.svelte";
    import Card from "$lib/Card.svelte";

    let { data } = $props();
    //   let squad = $derived(data.squad?.[0]);
    let squad = $derived(data.squad[0]);

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

    // Na het slepen niet per ongeluk de link van een kaart openen.
    function handleClick(e) {
        if (!hasDragged) return;
        e.preventDefault();
        hasDragged = false;
    }

    function handleWheel(e) {
        if (!carousel) return;
        if (window.innerWidth < 1168) return;
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
    }
</script>

<main>
    {#if data.isSearch}
        <p class="results">Results for: "{data.query}"</p>
    {/if}

    <section
        class="carousel"
        class:dragging={isDown}
        bind:this={carousel}
        onmousedown={handleMouseDown}
        onmousemove={handleMouseMove}
        onmouseup={handleMouseUp}
        onmouseleave={handleMouseUp}
        onclickcapture={handleClick}
        onwheel={handleWheel}
    >
        <!-- {#each squad?.persons ?? [] as member} -->
        {#each squad.persons as person}
            <!-- <Card person={member.person_id} /> -->
            <Card
                name={person.person_id.name}
                img={person.person_id.mugshot}
                id={person.person_id.id}
            />
            <!-- <p class="empty">Geen teamgenoten gevonden.</p> -->
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
    .results,
    .empty {
        text-align: center;
        color: var(--color-primary);
    }
    .results {
        margin-top: 2rem;
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
