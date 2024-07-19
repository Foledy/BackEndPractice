function moveToStart(array, newValue) {
    if (array.length <= newValue){
        return array.map(v => v);
    }

    return [...array.slice(-newValue), ...array.slice(0, array.length - newValue)];
}