const xMarksTheSpot = (input) => {
    if (input.length === 0) {
        return [];
    }
    let result = [];
    let r = 0;
    let c = 0;

    for (const row of input) {
        if (Array.isArray(row)) {
            for (const column of row) {
                if (column === 'x') {
                    if (result.length !== 0) {
                        return [];
                    } else {
                        result = [r, c];
                    }
                }
                c += 1;
            }
        } else {
            if (row === 'x') {
                if (result.length !== 0) {
                    return [];
                } else {
                    result = [r, c];
                }
            }
        }
        r += 1;
        c = 0;
    }

    return result;
}