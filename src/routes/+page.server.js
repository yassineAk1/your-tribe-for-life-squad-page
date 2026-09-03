export async function load() {
    const res = await fetch('https://fdnd.directus.app/items/squad?filter[cohort][_eq]=2627&fields=cohort,name,persons.person_id.*')
    const data = await res.json()

    return { squad: data.data }
}