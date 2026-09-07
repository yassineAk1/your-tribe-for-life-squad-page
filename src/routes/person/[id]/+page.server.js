import { error } from "@sveltejs/kit"

export async function load({ params, fetch }) {
	const res = await fetch(`https://fdnd.directus.app/items/person/${params.id}`)

	if (!res.ok) {
		throw error(404, "Deze klasgenoot bestaat niet")
	}

	const personResponseJSON = await res.json()

	return {
		person: personResponseJSON.data
	}
}
