function sequenceSum(begin, end) {
    if (begin > end) {
        return NaN;
    }

    return begin === end ? end : begin + sequenceSum(begin + 1, end);
}