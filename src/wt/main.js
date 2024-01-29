import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const url = new URL('worker.js', import.meta.url);

const performCalculations = async () => {
    const arr = []
    for (let i = 0; i < cpus().length; i++) {
        const promise = new Promise((res) => {
            const worker = new Worker(url, { workerData: i + 10 });

            worker.on('message', (data) => res({ status: 'resolved', data }));
            worker.on('error', () => res({ status: 'error', data: null }));
        })

        arr.push(promise);
    }

    const calculations = await Promise.all(arr);
    console.log(calculations);
};

await performCalculations();