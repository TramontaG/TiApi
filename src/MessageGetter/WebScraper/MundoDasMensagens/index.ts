import axios, { AxiosInstance } from 'axios';
import WebSiteCacheService from 'src/CacheService';
import { JSDOM } from 'jsdom';
import { imageGetter, textGetter } from './getters';

const BASE_URL = 'https://www.mundodasmensagens.com';

type ImageGetter = (dom: Document) => {
	alt: string;
	src: string;
}[];

type TextGetter = (dom: Document) => string[];

type Options = {
	imageGetter: ImageGetter;
	textGetter: TextGetter;
};

/**
 * retrieves messages from `https://www.mundodasmensagens.com`
 */
class MundoDasMensagensWebScraper {
	private httpInstace: AxiosInstance;
	private webSiteCacheService = new WebSiteCacheService(html => new JSDOM(html));
	private imageGetter: ImageGetter;
	private textGetter: TextGetter;
	constructor({ imageGetter, textGetter }: Options) {
		this.httpInstace = axios.create({
			baseURL: BASE_URL,
		});

		this.imageGetter = imageGetter;
		this.textGetter = textGetter;
	}

	async getMessages(endpoint: string, page?: number) {
		let path = endpoint;

		if (page && page > 0) {
			path += `/${page}`;
		}

		const html = await this.webSiteCacheService.getWebsite(path, () =>
			this.httpInstace.get(`${path}`).then(resp => resp.data)
		);

		if (!html) return;

		const images = this.imageGetter(html.window.document);
		const texts = this.textGetter(html.window.document);
		return { images, texts };
	}
}

export const mundoDasMensagensWebScraper = new MundoDasMensagensWebScraper({
	imageGetter,
	textGetter,
});
