function filter_list(l) {
    return l.filter(value => value.constructor === Number)
}
var arr = [1, 2, 'aasf', '1', '123', 123]
var filterList = new filter_list(arr)
console.log(filterList)
