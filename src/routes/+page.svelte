<script>
    import Searchbar from "$lib/Searchbar.svelte";
    import Card from "$lib/Card.svelte";

    const { data } = $props();
    let squad = data.squad[0];
</script>

<Searchbar />

{#each squad.persons as persons}
    {@const person = persons.person_id}
    <p>{person.name}</p>
{/each}
