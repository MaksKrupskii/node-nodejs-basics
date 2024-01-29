import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const dest = new URL('files/fileToCompress.txt', import.meta.url);
const src = new URL('files/archive.gz', import.meta.url);

const decompress = async () => {
    const gunzip = createGunzip();
    const readStream = createReadStream(src);
    const writeStream = createWriteStream(dest);

    await pipeline(readStream, gunzip, writeStream)
};

await decompress();
