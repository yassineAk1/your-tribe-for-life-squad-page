export async function load({ url, fetch }) {
    const searchbar = url.searchParams.get('searchbar') ?? ''
    const isSearch = searchbar.length > 0

    const filterObj = {
        cohort: { _eq: 2627 }
    };

    const params = new URLSearchParams({
        fields: 'cohort,name,persons.person_id.*',
        filter: JSON.stringify(filterObj)
    })

    if (isSearch) {
        const deepObj = {
            persons: {
                _filter: {
                    person_id: {
                        name: { _icontains: searchbar }
                    }
                }
            }
        };

        params.set('deep', JSON.stringify(deepObj));
    }

    // const res = await fetch(`https://fdnd.directus.app/items/squad?filter[cohort][_eq]=2627&fields=cohort,name,persons.person_id.*${params.toString()}`)
    const res = await fetch(`https://fdnd.directus.app/items/squad?${params}`)

    if (!res.ok) {
        throw new Error(`Directus error: ${res.status}`)
    }

    const personResponseJSON = await res.json()

    const fullUrl = `https://fdnd.directus.app/items/squad?${params}`
    console.log('full link:', fullUrl)
    console.log('data.length:', personResponseJSON.data?.length ?? 'undefined');

    return {
        query: searchbar,
        squad: personResponseJSON.data,
        isSearch
    }
}


// export async function load() {
//     const res = await fetch('https://fdnd.directus.app/items/squad?filter[cohort][_eq]=2627&fields=cohort,name,persons.person_id.*')
//     const data = await res.json()

//     return { squad: data.data }
// }