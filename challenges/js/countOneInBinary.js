var countBits = function (n) {
    if (n < 0) return;
    return n.toString(2).match(/1/g).length;
};

console.log(countBits(12345));
