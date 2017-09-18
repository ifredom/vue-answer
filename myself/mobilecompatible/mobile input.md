###手机输入框被遮挡或因为聚焦导致的页面UI变形兼容问题

    dom.scrollIntoView(true) 方法有兼容性问题，在安卓上部分机型正常，并且当点击键盘上的完成，同时input未失焦，会导致UI看上去不正常。尤其是使用第三方键盘时。
    在ios上，scrollIntoView()此方法无问题。
    解决办法：使用scrollTo()方法

    let setInputPostion={
        toFocus( event ){
            const target = event.target
            const position = 50
            // target.scrollIntoView(true)
                if(api.systemType=="ios"){
                    window.scrollTo(0,document.body.offsetHeight+position)
                } else {
                    window.scrollTo(0,document.body.offsetHeight)
                }
        },
        toBlur( event ){
            const target = event.target
            // target.scrollIntoView(false)
            window.scrollTo(0,target.offsetHeight)
        }
    }

### 手机360和oppo页面UI兼容问题

    css中使用浮动 float 的页面，在360和oppo手机上时常错位，解决办法：使用flex进行布局。