import { Router, helpers } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.delete('/api/poem/:id', context => {});
router.delete('/api/poem/comment/:id', context => {});

export default router;
