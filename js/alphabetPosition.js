function alphabetPosition(text) {
    const aplhabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = '';

    for (const char of text) {
        const current = char.toLowerCase();
        if (aplhabet.includes(current)) {
            if (result.length !== 0){
                result += ' ';
            }
            result += (aplhabet.indexOf(current) + 1);
        }
    }

    return result;
}