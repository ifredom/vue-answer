### webstorm配置

  1. JS文件,能够正常运行，但是 require引入模块时 ，出现下划波浪线

      1) 在Node中开启Node
      settings->Languages & Frameworks->Node.js Core library设置成enable
      2) 在JS中开启Node.js Core library
      settings->Languages & Frameworks->JavaScript->Libraries,将node.js Core前的enable选中.
      这样提示的波浪线就没有了

  2. websotrm无法自动编译
      settings --> appearance & Behavior --> System settings
