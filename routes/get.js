import { Router, helpers } from 'https://deno.land/x/oak/mod.ts';
import data from './data.js';

const router = new Router();

router.get('/api/user', context => {});
router.get('/api/user/:id', context => {});

router.get('/api/poem', ({ response }) => {
	response.body = data.topics;
});

router.get('/api/poem/:id', context => {
	const { id } = helpers.getQuery(context, { mergeParams: true });
	context.response.body = data.topics.find(item => item.id === parseInt(id));
});

export default router;
