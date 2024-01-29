const PREF = 'RSS_';


const parseEnv = () => {
    const parts = Object.entries(process.env).reduce((acc, [key, value]) => {
        if (key.startsWith(PREF)) {
            acc.push(`${key}= is${value}`);
        }
        
        return acc;
    }, []);

    console.log(parts.join(', '));
};

parseEnv();