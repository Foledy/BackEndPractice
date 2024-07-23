function ArrayToObject(array) {
    let index = 0;

    for (const item of array) {
        this[index] = item;
        index += 1;
    }

    return this;
}

function ObjectToArray(obj) {
    const result = [];

    for (const item of obj) {
        result.push(item);
    }

    return result;
}

dObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,

    [Symbol.iterator]() {
        this.current = 0;
        return this;
    },

    next() {
        if (this.current < this.length) {
            return { done: false, value: this[this.current++] };
        }

        return { done: true };
    }
}