import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const transform = async () => {
    await pipeline(
        process.stdin,
        new Transform({
            transform(chunk, encoding, callback) {
                const data = String(chunk).split('').reverse().join('');
                callback(null, data);
            }}),
        process.stdout
    );
};

await transform();
