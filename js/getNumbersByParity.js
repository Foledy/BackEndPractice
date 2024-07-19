function getNumbersByParity(array, method) {
    if (method === "even") {
        return array.filter(v => v % 2 === 0);
    }

    return array.filter(v => v % 2 !== 0);
}