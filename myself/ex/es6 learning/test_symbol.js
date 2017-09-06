let selected = { // 消除魔法字符串
    select: symbol('select')
}

function selectwitch(sel, options) {
    switch (sel) {
        case selected.select:
            console.log("1")
            break
        case '2':
            console.log("2")
            break
        default:
            console.log("default")
            break
    }

}
selectwitch(selected.select)