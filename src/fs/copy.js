import { cp } from 'node:fs/promises';

const src = new URL('files', import.meta.url);
const dest = new URL('files_copy', import.meta.url);

const copy = async () => {
    try {
        await cp(src, dest, { errorOnExist: true, recursive: true, force: false });
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await copy();
