import placeholder from "$lib/assets/placeholder.jpg";

export function imagesrc(avatar, mugshot) {
	if (avatar) {
		return avatar;
	}

	if (mugshot) {
		return `https://fdnd.directus.app/assets/${mugshot}?format=webp`;
	}

	return placeholder;
}

export function fallbacksrc(src, avatar, mugshot) {
	if (src === avatar) {
		return imagesrc(null, mugshot); 
	}

	return imagesrc(null, null); 
}
