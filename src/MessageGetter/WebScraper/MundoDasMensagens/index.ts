import { imageGetter, textGetter, pageAdder } from './getters';
import GenericWebScraper, { Options } from '../GenericScraper';

const BASE_URL = 'https://www.mundodasmensagens.com';

class MundoDasMensagensWebScraper extends GenericWebScraper {
	constructor(baseUrl: string, options: Options) {
		super(baseUrl, options);
	}
}

export const mundoDasMensagensWebScraper = new MundoDasMensagensWebScraper(
	BASE_URL,
	{
		imageGetter,
		textGetter,
		pageAdder,
	}
);
