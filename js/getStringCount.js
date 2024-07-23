const cache = new WeakMap();

function extern_getStringCount(data) {
    return getStringCount(data);
}

function getStringCount(data, alreadyUsed = []) {
    if (data === null || alreadyUsed.includes(data)) {
        return 0;
    }

    alreadyUsed.push(data);

    if (cache.has(data)) {
        return cache[data];
    }

    const type = typeof data;

    if (type !== "object") {
        cache[data] = type === "string" ? 1 : 0;
        return cache[data];
    }

    let counter = 0;

    if (Array.isArray(data)) {
        for (const item of data) {
            counter += getStringCount(item, alreadyUsed);
        }
    } else {
        for (const item of Object.keys(data)) {
            counter += getStringCount(data[item], alreadyUsed);
        }
    }

    cache[data] = counter;
    return cache[data];
}

const obj = {
    name: 'obj'
}

const cycleObj = {
    myBrother: obj,
    myAge: 15
}

obj.myBrother = cycleObj;