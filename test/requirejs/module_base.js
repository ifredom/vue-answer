var param = {}
var module = (function(modename){
    var count = 1;
    var name = 'tom'
    function module1(){
        console.log('count is : '+count)
        return count
    }
    function module2(){
        console.log(modename)
    }
    return {
        module1,
        module2
    }
})(param)

param.name = 'hehe'
param.run=function(){
    console.log(this.name)
}
module.module1()
module.module2()
param.run()


// 1953627738  9543625

// 1564654464   147963582
