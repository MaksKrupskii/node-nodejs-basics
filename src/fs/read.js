import { readFile } from 'node:fs/promises'

const url = new URL('files/fileToRead.txt', import.meta.url);

const read = async () => {
    try {
        const data = await readFile(url, 'utf8');
        console.log(data);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();