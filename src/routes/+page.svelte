<script>
    import Searchbar from "$lib/Searchbar.svelte";

    const { data } = $props();
    let squad = data.squad[0];
    console.log(squad);
</script>

<Searchbar />

{#each squad.persons as persons}
    {@const person = persons.person_id}
    <p>{person.name}</p>
{/each}
