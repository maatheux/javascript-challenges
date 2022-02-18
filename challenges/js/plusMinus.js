"use strict";
function plusMinus(arr) {
    const arrLen = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach(value => {
        if (value > 0) {
            positive++;
        }
        if (value < 0) {
            negative++;
        }
        if (value === 0) {
            zero++;
        }
    });
    console.log((positive / arrLen).toFixed(6));
    console.log((negative / arrLen).toFixed(6));
    console.log((zero / arrLen).toFixed(6));
}
