var toString = Object.prototype.toString
var isType = function(type) {
    return function(obj) {
        return obj ? toString.call(obj) === '[object ' + obj + ']' : toString.call(type) === '[object ' + type + ']'
    }
}
var isString = isType('String')
var isFunction = isType('Function')

console.log(isString())