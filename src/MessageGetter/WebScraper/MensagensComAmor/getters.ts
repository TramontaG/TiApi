export const imageGetter = (dom: Document) => {
	const images = dom.querySelectorAll('.img img');
	const imgData = [...Array.from(images)].map(img => {
		return {
			alt: img.getAttribute('alt') as string,
			src: img.getAttribute('data-src') as string,
		};
	});

	return imgData;
};

export const textGetter = (dom: Document) => [];

export const pageAdder = (page: number) => '';
