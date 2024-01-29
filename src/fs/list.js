import { readdir } from 'node:fs/promises';

const url = new URL('files', import.meta.url);

const list = async () => {
    try {
        const list = await readdir(url);
        console.log(list);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();