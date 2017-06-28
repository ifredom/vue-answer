function test(){
  function fun1(){
    console.log("fun1")
  }
  function fun2(){
    console.log("fun2")
    function fun3(){
      console.log("fun3")
    }
  }
}
var obj = new test()
console.log(obj)
//obj.fun1()
