import { Router } from 'express';
import BelasMensagensApi from '../MessageGetter/API/BelasMensagens';
import { formatPost, randomItem } from '../MessageGetter/API/BelasMensagens/Helpers';
import { BelasMensagensPost } from '../MessageGetter/API/BelasMensagens/Models';

const BelasMensagens = Router();

BelasMensagens.use('/', (req, res, next) => {
	console.log('aaaa');
	next();
});

BelasMensagens.get('/random', async (req, res, next) => {
	try {
		const { query } = req.query;

		const { data } = await BelasMensagensApi.get<BelasMensagensPost[]>('/posts', {
			params: {
				search: `${(query as string).toLowerCase()}`,
				per_page: 100,
			},
		});

		const randomPost = await formatPost(randomItem(data));

		res.send(randomPost);
	} catch (e) {
		console.warn(e);
		res.status(500).send(e);
	}
});

BelasMensagens.get('/text', (req, res, next) => {
	res.send(req.path);
});

export default BelasMensagens;
