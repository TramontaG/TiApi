export type BelasMensagensPost = {
	id: string;
	date: string;
	date_gmt: string;
	link: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	_links: {
		'wp:attachment': [
			{
				href: string;
			}
		];
	};
};

export type BelasMensagensExtractedData = {
	text: string;
	title: string;
	url: string;
	media: {
		url: string;
		mimetype: string;
	} | null;
};

export type BelasMensagensAttachmentData = {
	id: number;
	date: string;
	date_gmt: string;
	link: string;
	alt_text: string;
	media_type: string;
	mime_type: string;
	media_details: {
		width: number;
		height: number;
		file: string;
		filesize: string;
	};
	source_url: string;
};
