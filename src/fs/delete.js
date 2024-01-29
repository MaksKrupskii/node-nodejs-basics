import { rm } from 'node:fs/promises'

const url = new URL('files/fileToRemove.txt', import.meta.url);

const remove = async () => {
    try {
        await rm(url)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();