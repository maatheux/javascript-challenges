"use strict";
function miniMaxSum(arr) {
    const resultsArr = [];
    for (let i = 0; i < arr.length; i++) {
        const auxArr = [...arr];
        auxArr.splice(i, 1);
        resultsArr.push(auxArr.reduce((total, value) => {
            total += value;
            return total;
        }, 0));
    }
    console.log(`${Math.min(...resultsArr)} ${Math.max(...resultsArr)}`);
}
