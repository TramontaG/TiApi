import { mundoDasMensagensWebScraper } from 'src/MessageGetter';
import useScraper from './endpointHandler';

export const MundoDasMensagens = () =>
	useScraper('/mundodasmensagens', mundoDasMensagensWebScraper);
