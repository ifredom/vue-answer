### webstorm配置

1. JS文件,能够正常运行，但是 require引入模块时 ，出现下划波浪线
```
      1) 在Node中开启Node
      settings->Languages & Frameworks->Node.js Core library设置成enable
      2) 在JS中开启Node.js Core library
      settings->Languages & Frameworks->JavaScript->Libraries,将node.js Core前的enable选中.
      这样提示的波浪线就没有了
```
2. websotrm无法自动编译
```
   settings --> appearance & Behavior --> System settings
```
### webstorm Shortcut key
    ctrl + shift + n: 打开工程中的文件(类似于eclipse中的ctrl+shift+R)，目的是打开当前工程下任意目录的文件。（必记）
    ctrl + F12: 显示当前文件的具体结构
    ctrl + b: 跳到变量申明处（必记）
    ctrl + r: 替换（必记）
    ctrl + shift + r: 全局替换（必记）
    ctrl+shift+A	快速查找并使用编辑器所有功能（必记）
    ctrl + / : 单行注释
    ctrl + shift + / : 块注释
    ctrl + d: 行复制
    ctrl + shift + up: 行移动
    ctrl + shift + v: 可以复制多个文本
    shift + F6: 重构标签名
    ctrl + []: 匹配当前代码行包裹的括号和方括号 {}[]
    ctrl + x : 直接剪切当前行（如果选中部分内容则剪切选中的内容）
    alt + left/right ： 切换已打开的标签页
    ctrl + shift + i : 如果是css中的class则显示当前class详细信息,如果是js则显示function的详细信息(想象一下，如果在jquery的方法上查看详细信息，就直接可以看到实现代码了)，如果是php，那当时还是function的详细信息
    ctrl + '-/+': 可以折叠项目中的任何代码块，包括htm中的任意nodetype=3的元素，function,或对象直接量等等。它不是选中折叠，而是自动识别折叠。
    ctrl + '.': 折叠选中的代码的代码。

    项目中添加对jQuery的支持。
    File -> settings -> Javascript Libraries -> Add
