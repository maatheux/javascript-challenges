function divisors(integer) {
    const divisorsNumbers = [];
    for (let number = 2; number < integer; number++) {
        if (integer % number === 0) {
            divisorsNumbers.push(number);
        }
    }
    if (divisorsNumbers.length === 0) {
        return `${integer} is a prime`;
    } else {
        return divisorsNumbers;
    }
}

console.log(divisors(13));
