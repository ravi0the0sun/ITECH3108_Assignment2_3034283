import { Router, helpers } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.post('/api/user', context => {});
router.post('/api/poem', context => {});
router.post('/api/poem/:id', context => {});
router.post('/api/poem/comment', context => {});
router.post('/api/poem/comment/:id', context => {});

export default router;
