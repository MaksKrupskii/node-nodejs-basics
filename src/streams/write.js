import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const src = new URL('files/fileToWrite.txt', import.meta.url);

const write = async () => {
    const stream = createWriteStream(src);

    await pipeline(process.stdin, stream);
};

await write();
