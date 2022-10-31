import GenericWebScraper, { Options } from '../GenericScraper';
import { imageGetter, pageAdder, textGetter } from './getters';

const BASE_URL = 'https://www.belasmensagens.com.br';

class BelasMensagensWebScraper extends GenericWebScraper {
	constructor(baseUrl: string, options: Options) {
		super(baseUrl, options);
	}
}

export const belasmensagensWebScraper = new BelasMensagensWebScraper(BASE_URL, {
	imageGetter,
	textGetter,
	pageAdder,
});
