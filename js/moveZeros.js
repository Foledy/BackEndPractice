function moveZeros(arr) {
    const result = [];
    let counter = 0;

    for (const item of arr) {
        if (item === 0) {
            counter += 1;
        } else {
            result.push(item);
        }
    }

    for (let i = 0; i < counter; i++) {
        result.push(0);
    }

    return result;
}