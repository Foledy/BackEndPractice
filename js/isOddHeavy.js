function isOddHeavy(n){
    let minOdd = Number.MAX_SAFE_INTEGER;
    let maxEven = Number.MIN_SAFE_INTEGER;

    for (const item of n) {
        if (item % 2 !== 0) {
            minOdd = Math.min(minOdd, item);
        } else {
            maxEven = Math.max(maxEven, item);
        }
    }

    return minOdd !== Number.MAX_SAFE_INTEGER && minOdd > maxEven;
}