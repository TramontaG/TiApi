import BelasMensagensApi from '..';
import {
	BelasMensagensAttachmentData,
	BelasMensagensExtractedData,
	BelasMensagensPost,
} from '../Models';

export const formatPost = async (
	post: BelasMensagensPost
): Promise<BelasMensagensExtractedData> => {
	const sanitizedAttachmentUrl = post._links['wp:attachment'][0].href.replace(
		'https://www.belasmensagens.com.br/wp-json/wp/v2',
		''
	);

	const { data } = await BelasMensagensApi.get<BelasMensagensAttachmentData[]>(
		sanitizedAttachmentUrl
	);

	const extractedData: BelasMensagensExtractedData = {
		text: post.content.rendered.replace(/<(\/)?p>/g, ''),
		title: post.title.rendered,
		url: post.link,
		media: null,
	};

	if (data.length) {
		extractedData.media = {
			mimetype: data[0].mime_type,
			url: data[0].link,
		};
	}

	return extractedData;
};

export const randomItem = <T>(array: T[]) => {
	return array[Math.round(Math.random() * (array.length - 1))];
};
