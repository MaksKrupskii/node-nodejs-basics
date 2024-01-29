import { rename as renameFile, access } from 'node:fs/promises'

const fileUrl = new URL('files/wrongFilename.txt', import.meta.url);
const fileNewUrl = new URL('files/properFilename.md', import.meta.url);

const rename = async () => {
    let fileExist;
    let newFileExist;

    try {
        await access(fileNewUrl);
        newFileExist = true;
    } catch (error) {
        newFileExist = false;
    }

    try {
        await access(fileUrl);
        fileExist = true;
    } catch (error) {
        fileExist = false;
    }

    if (!newFileExist && fileExist) {
        await renameFile(fileUrl, fileNewUrl);
    } else {
        throw new Error('FS operation failed');
    }
};

await rename();