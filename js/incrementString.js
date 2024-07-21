function incrementString (strng) {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let number = '';
    for (let i = strng.length - 1; i >= 0; i--) {
        if (!digits.includes(+strng[i])) {
            break;
        }
        number += strng[i];
    }

    number.split('').reverse().join('');

    const increment = +number + 1;
    if (increment.toString().length < number.length) {
        return strng.slice(0, strng.length - number.length) + '0'.repeat(number.length - increment.toString().length) + increment;
    }

    return strng.slice(0, strng.length - number.length) + increment;
}