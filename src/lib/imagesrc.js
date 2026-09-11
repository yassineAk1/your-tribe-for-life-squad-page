import placeholder from "/assets/placeholder.jpg";

export function imagesrc(avatar, mugshot) {
	if (avatar) {
		return avatar;
	}

	if (mugshot) {
		return `https://fdnd.directus.app/assets/${mugshot}?format=webp`;
	}

	return placeholder;
}
