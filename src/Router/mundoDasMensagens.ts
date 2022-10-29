import express from 'express';
import { mundoDasMensagensWebScraper } from 'src/MessageGetter';

const router = express.Router();

router.get('/*', async (req, res) => {
	let page: number | undefined = undefined;
	if (req.query['page']) {
		page = Number(req.query['page']);
	}
	const result = await mundoDasMensagensWebScraper.getMessages(req.path, page);
	if (!result) {
		return res.status(404).send();
	}
	res.send(result);
});

export const MundoDasMensagens = () => router;
