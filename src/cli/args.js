const PREF = '--';

const parseArgs = () => {
    const parts = process.argv.reduce((acc, item, index, arr) => {
        if (item.startsWith(PREF)) {
            acc.push(`${item.replace(PREF, '')} is ${arr[index + 1]}`)
        }
        
        return acc;
    }, []);

    console.log(parts.join(', '));
};

parseArgs();