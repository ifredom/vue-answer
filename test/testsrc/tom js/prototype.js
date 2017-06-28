/**
 *  Created by Administrator-ifredom on 2017/6/21 0021.
 */
//Object.prototype.too = 1;
//var foo = {moo: 2};
//
//for(var i in foo) {
//  console.log(i,':',foo[i]); // 输出两个属性：moo 和 too
//}


let bar  = function(name ){
  this.say =function(){
    console.log("saying")
  };
  this.name = name
  this.height = '666'
}
bar.prototype.othername = "999"

let test = new bar()

for(var j in test) {
  console.log(j); // 输出两个属性：bar 和 moo
}
