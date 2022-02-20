"use strict";
function timeConversion(s) {
    let hour = s.match(/\d/g);
    if (s.match(/\PM/i) && Number(hour[0] + hour[1]) !== 12) {
        let militaryHour = String(Number(hour.join('')[0] + hour.join('')[1]) + 12);
        hour.splice(0, 2, militaryHour[0], militaryHour[1]);
    }
    let date = new Date(Date.UTC(2022, 2, 19, Number(hour[0] + hour[1]), Number(hour[2] + hour[3]), Number(hour[4] + hour[5])));
    return date.toLocaleTimeString('en-GB');
}
console.log(timeConversion('02:04:20PM'));
