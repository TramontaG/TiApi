import express, { RequestHandler } from 'express';
import GenericWebScraper from 'src/MessageGetter/WebScraper/GenericScraper';

const useScraper = (path: string, scraper: GenericWebScraper) => {
	const router = express.Router();

	const endpointHandler: RequestHandler<{
		page: string;
	}> = async (req, res) => {
		let page: number | undefined = undefined;
		if (req.query['page']) {
			page = Number(req.query['page']);
		}
		const result = await scraper.getMessages(req.path, page);

		if (!result) {
			return res.status(404).send();
		}
		res.send(result);
	};

	router.get(path + '/*', endpointHandler);

	return router;
};

export default useScraper;
