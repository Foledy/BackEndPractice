function firstNonRepeatingLetter(s) {
    const usedKeys = [];
    const duplicate = [];

    for (let i = 0; i < s.length; i++) {
        const current = s[i].toLowerCase();
        if (usedKeys.includes(current)) {
            duplicate.push(current);
        } else {
            usedKeys.push(current);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (!duplicate.includes(s[i].toLowerCase())) {
            return s[i];
        }
    }

    return '';
}
