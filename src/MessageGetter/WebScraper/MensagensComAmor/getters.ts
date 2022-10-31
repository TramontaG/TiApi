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

export const textGetter = (dom: Document) => {
	const messages = dom.querySelectorAll('.share-text');
	const sanitizedMessages = [...Array.from(messages)].map(el =>
		el.innerHTML.trim().replace(/<br>/g, '\n')
	);

	return sanitizedMessages;
};

export const pageAdder = (page: number) => '';
