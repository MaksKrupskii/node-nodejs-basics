import { writeFile } from 'node:fs/promises';

const url = new URL('files/fresh.txt', import.meta.url);

const create = async () => {
    try {
        await writeFile(url, 'I am fresh and young', { flag: 'wx' });        
    } catch {
        throw Error('FS operation failed');
    }
};

await create();
