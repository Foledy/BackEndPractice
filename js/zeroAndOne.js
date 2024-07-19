function zeroAndOne(s) {
    for (let i = 0; i < s.length - 1; i++) {
        const c = s[i] + s[i + 1];
        if (c.includes('0') && c.includes('1')) {
            s = s.slice(0, i) + ' ' + s.slice(i + 2);
        }
    }

    while (s.includes(' ')) {
        s = s.replace(' ', '');
    }

    return s.length;
}