import { Router } from 'express';
import BelasMensagensApi from 'src/MessageGetter/API/BelasMensagens';
import {
	formatPost,
	randomItem,
} from 'src/MessageGetter/API/BelasMensagens/Helpers';
import { BelasMensagensPost } from 'src/MessageGetter/API/BelasMensagens/Models';

const BelasMensagens = Router();

BelasMensagens.get('/random', async (req, res, next) => {
	const { query } = req.query;

	const { data } = await BelasMensagensApi.get<BelasMensagensPost[]>('/posts', {
		params: {
			search: `${(query as string).toLowerCase()}`,
			per_page: 100,
		},
	});

	console.log(randomItem(data));

	const randomPost = await formatPost(randomItem(data));

	res.send(randomPost);
});

BelasMensagens.get('/text', (req, res, next) => {
	res.send(req.path);
});

export default BelasMensagens;
