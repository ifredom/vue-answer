/**
 *  Created by Administrator-ifredom on 2017/6/9 0009.
 *  [Symbol.iterator]	返回一个对象的无参函数，被返回对象符合迭代器协议
 *  迭代器协议
   该迭代器协议定义了一种标准的方式来产生一个有限或无限序列的值。

   当一个对象被认为是一个迭代器时，它实现了一个 next() 的方法并且拥有以下含义：

   属性	值
   next
   返回一个对象的无参函数，被返回对象拥有两个属性：
   done (boolean)
   如果迭代器已经经过了被迭代序列时为 true。这时 value 可能描述了该迭代器的返回值。返回值在这里有更多解释。
   如果迭代器可以产生序列中的下一个值，则为 false。这等效于连同 done 属性也不指定。
   value - 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。
 */

var someArr= ["a", "b", "c"]
var iterator1 = someArr.entries();
console.log(iterator1);
console.log(typeof iterator1);
console.log( someArr.entries() === someArr[Symbol.iterator]());
console.log(iterator1.toString())
// Array Iterator {}
console.log(iterator1.next().value);
// [0, "a"]
console.log(iterator1.next().value);
// [1, "b"]
console.log(iterator1.next().value);
// [1, "c"]
console.log(iterator1.next().value);
// undefined


var someString = "hi";
let iterator = someString[Symbol.iterator]()

console.log(iterator)
iterator.next()
console.log(iterator)
iterator.next()
console.log(iterator)
iterator.next()
console.log(iterator)


var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString();           // "[object Array Iterator]"
someArrayEntries === someArrayEntries[Symbol.iterator]();    // true
console.log( someArrayEntries === someArrayEntries[Symbol.iterator]())

