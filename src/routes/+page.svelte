<script>
    import Searchbar from "$lib/Searchbar.svelte";
    import Card from "$lib/Card.svelte";

    let { data } = $props();
    let squad = $derived(data.squad[0]);

    console.log(squad);
</script>

<Searchbar />

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
