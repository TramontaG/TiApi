import axios, { AxiosInstance } from 'axios';
import WebSiteCacheService from 'html-memo';
import { JSDOM } from 'jsdom';

const BASE_URL = 'https://www.mundodasmensagens.com';

type ImageGetter = (dom: Document) => {
	alt: string;
	src: string;
}[];

type TextGetter = (dom: Document) => string[];

type PageAdder = (page: number) => string;

export type Options = {
	imageGetter: ImageGetter;
	textGetter: TextGetter;
	pageAdder: PageAdder;
};

class GenericWebScraper {
	private httpInstace: AxiosInstance;
	private webSiteCacheService = new WebSiteCacheService(html => new JSDOM(html));
	private imageGetter: ImageGetter;
	private textGetter: TextGetter;
	private pageAdder: PageAdder;

	constructor(baseUrl: string, { imageGetter, textGetter, pageAdder }: Options) {
		this.httpInstace = axios.create({
			baseURL: baseUrl,
		});

		this.imageGetter = imageGetter;
		this.textGetter = textGetter;
		this.pageAdder = pageAdder;
	}

	async getMessages(endpoint: string, page?: number) {
		let path = endpoint;

		if (page && page > 0) {
			path += this.pageAdder(page);
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

export default GenericWebScraper;
