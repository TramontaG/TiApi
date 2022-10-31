import { mensagensComAmorWebScraper } from 'src/MessageGetter';
import useScraper from './endpointHandler';

export const MensagensComAmor = () =>
	useScraper('/mensagenscomamor', mensagensComAmorWebScraper);
