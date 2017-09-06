

define(['b','c'], function(b,c) {
    console.log(b)
    console.log(c)
    return {
        b : b.moduleName,
        c : c.moduleName,
        color: 'red',
        background :'yellow'
    }
});