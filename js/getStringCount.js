function getStringCount(data) {
    if (data == null) {
        return 0;
    }

    const type = typeof data;

    if (type !== "object") {
        return type === "string" ? 1 : 0;
    }

    let counter = 0;

    if (Array.isArray(data)) {
        for (const item of data) {
            counter += getStringCount(item);
        }
    } else {
        for (const item of Object.keys(data)) {
            counter += getStringCount(data[item]);
        }
    }

    return counter;
}