var view = (function () {
    console.log("in")
    function doRender() {
        console.log("do doRender")
    }
    return {
        render() {
            console.log("begin render")
        }
    }
})()
console.log(view)
view.render()
