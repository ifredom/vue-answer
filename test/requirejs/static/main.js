define('b',{
    moduleName:'i am b'
});

define('c',{
    moduleName:'i am c'
});


define('a',['b','c'], function(b,c) {
    console.log(b)
    console.log(c)
    return {
        b : b.moduleName,
        c : c.moduleName,
        color: 'red',
        background :'yellow'
    }
});


define('main',['a'],function(a){
    console.log(a)
    return {
        color: a.color,
        width: '120px'
    }
});
