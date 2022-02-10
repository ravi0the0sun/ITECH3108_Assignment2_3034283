import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import get from './routes/get.js';
import post from './routes/post.js';
import del from './routes/delete.js';
import { logger } from './middleware/logger.js';

const app = new Application();
const router = new Router();

app.use(logger);
app.use(router.routes());
app.use(get.routes());
// app.use(post.routes());
// app.use(del.routes());

console.log(`Server running on PORT: 7000`);
await app.listen({ port: 7000 });
