var countBits = function(n) {
    return Array.from(n.toString(2).matchAll(/(1)/g)).length;
};