import express, { RequestHandler } from 'express';
import { mundoDasMensagensWebScraper } from 'src/MessageGetter';

const router = express.Router();

/**
 * Retrieves images and text messages from any mundodasmensagens website.
 * @param req
 * @param res
 * @returns
 */
const mundoDasMensagensEndpoint: RequestHandler<{
	page: string;
}> = async (req, res) => {
	let page: number | undefined = undefined;
	if (req.query['page']) {
		page = Number(req.query['page']);
	}
	const result = await mundoDasMensagensWebScraper.getMessages(req.path, page);
	if (!result) {
		return res.status(404).send();
	}
	res.send(result);
};

router.get('/*', mundoDasMensagensEndpoint);

export const MundoDasMensagens = () => router;
