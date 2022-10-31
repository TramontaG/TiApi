import { belasmensagensWebScraper } from 'src/MessageGetter';
import useScraper from './endpointHandler';

export const BelasMensagens = () => useScraper('', belasmensagensWebScraper);
