import { Router, helpers } from 'https://deno.land/x/oak/mod.ts';
import data from './data.js';

const router = new Router();

router.get('/poem', ({ response }) => {
	response.body = data.topics;
});

router.get('/poem/:id', context => {
	const { id } = helpers.getQuery(context, { mergeParams: true });
	context.response.body = data.topics.find(item => item.id === parseInt(id));
});

router.get('/user', context => {});

export default router;
