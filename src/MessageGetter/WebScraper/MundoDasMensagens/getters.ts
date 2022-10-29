export const imageGetter = (dom: Document) => {
	const images = dom.getElementsByClassName('image-box');
	const imgData = [...Array.from(images)].map(img => {
		return {
			alt: img.getAttribute('alt') as string,
			src: img.getAttribute('data-src') as string,
		};
	});
	return imgData;
};

export const textGetter = (dom: Document) => {
	const messages = dom.getElementsByClassName('copy-text');
	const sanitizedMessages = [...Array.from(messages)].map(el =>
		el.innerHTML.trim().replace(/<br>/g, '\n')
	);

	return sanitizedMessages;
};
