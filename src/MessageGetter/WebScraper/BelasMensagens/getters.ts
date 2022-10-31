/**
 * Define here how the page must be manipulated in order to
 * retrieve the text messages
 * @param dom
 * @returns
 */
export const textGetter = (dom: Document) => {
	return [];
};

export const imageGetter = (dom: Document) => {
	const images = dom.getElementsByClassName('img-responsive');
	const imgData = [...Array.from(images)].map(img => {
		return {
			alt: img.getAttribute('alt') as string,
			src: img.getAttribute('data-src') as string,
		};
	});
	return imgData;
};

export const pageAdder = (page: number) => {
	return `/page/${page}`;
};
