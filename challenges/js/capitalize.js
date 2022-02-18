function toCamelCase(str) {
    this.arr = str.split('-').join(',').split('_').join(',').split(',');
    this.count = 0;
    arr.forEach(value => {
        if (value != arr[0]) {
            this.capt = value[0].toUpperCase();
            this.repl = value.replace(value[0], capt);
            arr.push(repl);
        } else {
            arr.push(value);
        }
        count++;
    });
    for (let i = 0; i < count; i++) {
        arr.shift();
    }
    this.capitalized = arr.join('');
    return capitalized;
}
