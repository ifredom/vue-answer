/**
 * Created by ifredom on 2017/6/9 0009.
 * test es6 rest
 * @run_method  node rest spread.js
 * args就是一个数组
 */
function testRest(...arg){
  return arg.length
}
let restult = testRest("参数一","参数二") //2
console.log(restult)

/*
* test es6 spread
**/
let arr1 = ["apple"]
let arr2 = ["banana","ourange"]
// 构造函数
let answer = [...arr1,...arr2]

//析构函数
let other1,other2
[other1,...other2] = answer

console.log(answer)
console.log(other1)
console.log(typeof other1)
console.log(other2)
