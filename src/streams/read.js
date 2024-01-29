import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const src = new URL('files/fileToRead.txt', import.meta.url);

const read = async () => {
    const stream = createReadStream(src, { encoding: 'utf-8' });

    await pipeline(stream, process.stdout);
};

await read();
