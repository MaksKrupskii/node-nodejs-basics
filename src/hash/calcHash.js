import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const url = new URL('files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
    const data = await readFile(url);
    const hash = createHash('sha256');
    hash.update(data);
    console.log(hash.digest('hex'));
};

await calculateHash();
