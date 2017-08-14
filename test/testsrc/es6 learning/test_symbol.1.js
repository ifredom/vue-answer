let a = {
    name: "111"
}
let b = a
console.log(b)

let c = { a }
console.log(c)

function fun() {
    console.log("Aaa")
}
let [x = fun()] = [2]
console.log(x)

let { boo: bar } = { baz: '000', boo: '111' }
console.log(bar)

let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data } = jsonData;

console.log(id, status, data);