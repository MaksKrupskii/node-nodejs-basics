import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const src = new URL('files/fileToCompress.txt', import.meta.url);
const dest = new URL('files/archive.gz', import.meta.url);

const compress = async () => {
    const gzip = createGzip();
    const readStream = createReadStream(src);
    const writeStream = createWriteStream(dest);

    await pipeline(readStream, gzip, writeStream)
};

await compress();
