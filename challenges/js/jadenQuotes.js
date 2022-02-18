String.prototype.toJadenCase = function () {
    let quotes = this.valueOf().split(' ');
    const arr = [];
    for (words of quotes) {
        arr.push(words.replace(words[0], words[0].toUpperCase()));
    }
    return arr.join(' ');
};

const str = `How can mirrors be real if our eyes aren't real`;
console.log(str.toJadenCase());
