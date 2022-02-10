import * as bcrypt from 'https://deno.land/x/bcrypt/mod.ts';

const hash = await bcrypt.hash('test');
console.log('hash without salt ', hash);
const result = await bcrypt.compare('test', hash);
console.log(result);
const salt = await bcrypt.genSalt(8);
const hashSalt = await bcrypt.hash('test', salt);
console.log('hash with salt ', hashSalt);
const check = await bcrypt.compare('test', hashSalt);
console.log(check);
