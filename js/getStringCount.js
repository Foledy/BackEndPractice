const cache = new WeakMap();

// публичная функция для обращения из других мест
function extern_getStringCount(data) {
    return getStringCount(data);
}

// приватная функция, которая используется только методом 'extern_getStringCount'
// функция собирает все ссылки, которые присутствуют в текущем запросе, и если ссылка присутствует,
// то возвращает '0', т.е н е обрабатывает сам объект в целом, т.к он был ранее обработан в текущем вызове
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