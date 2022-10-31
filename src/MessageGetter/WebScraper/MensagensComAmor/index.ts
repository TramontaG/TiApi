import GenericWebScraper, { Options } from '../GenericScraper';
import { imageGetter, pageAdder, textGetter } from './getters';

const BASE_URL = 'https://www.mensagenscomamor.com';

class MensagensComAmorWebScraper extends GenericWebScraper {
	constructor(baseUrl: string, options: Options) {
		super(baseUrl, options);
	}
}

export const mensagensComAmorWebScraper = new MensagensComAmorWebScraper(BASE_URL, {
	textGetter,
	imageGetter,
	pageAdder,
});
