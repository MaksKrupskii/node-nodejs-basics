import { fork } from 'node:child_process';

const script = new URL('files/script.js', import.meta.url);

const spawnChildProcess = async (args) => {
    const child = fork(script, args, { silent: true })
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout)
};

spawnChildProcess();
