module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,  // 语言版本es6
        sourceType: 'module' // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    },
    globals: {
        api: true,
        $api: true,
        NODE_ENV: true
    },
    env: {
        browser: true,
        node:true
    },
    extends: 'eslint:recommended',   // "airbnb"风格
    rules: {
        'indent': [ 'off', 4], // 使用空格缩进，关闭
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 发布环境禁止debug
        'semi': ['error', 'never'], // 禁止行结束使用分号
        'semi-spacing': ['error', {'before': false, 'after': true}], // 行尾时起作用，分号前禁止空格
        'quotes': ['error', 'single'], // 字符串使用单引号
        'no-console':process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用console，警告
        'eqeqeq': ['warn', 'always'],  // 禁用==和!== ,使用=== 和！==
        'no-inner-declarations': 'error', // 禁止在functions种嵌套functions
        
        // 来自百度前端规范
        'no-var': 'error', // 用let/const代替var 
        'no-const-assign': 'error', // 不允许改变用const声明的变量 
        'prefer-const': 'warn', // 如果一个变量不会被重新赋值，最好使用const进行声明。
        'no-use-before-define': 'error', // 禁止定义前使用 
        'no-magic-numbers': "warn", // 禁止魔法数字
        'no-mixed-spaces-and-tabs': 'error', // 禁止使用 空格 和 tab 混合缩进 
        'camelcase': ['error', {properties: 'never'}], // 要求使用骆驼拼写法 
        'no-multi-spaces': 'error', // 禁止出现多个空格而且不是用来作缩进的
        'array-bracket-spacing': ['error', 'never'], // 数组紧贴括号部分不允许包含空格。 
        'space-before-function-paren': ['error', 'never'], // 禁止函数圆括号之前有一个空格
        'no-duplicate-case': 'error', // 禁止在 switch 语句中的 case 子句中出现重复的测试表达式 
        'default-case': 'error', // 要求 Switch 语句中有 Default 分支 
        'radix': 'error', // 在parseInt()中始终使用基数以消除意想不到的后果。 
        'prefer-template': 'error', // 使用模板而非字符串连接 
        'no-dupe-keys': 'error', // 禁止在对象字面量中出现重复的键 
        'no-extend-native': 'error', // 禁止扩展原生对象 
        'no-new-object': 'error', // 禁止使用 Object 构造函数 
        'no-array-constructor': 'error', //禁止使用 Array 构造函数 
        'no-return-assign': 'error', // 禁止在返回语句中赋值  
        'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换 
        'no-eval': 'error', // 禁用 eval() 
        'no-with': 'error', // 禁用 with 语句 
        'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句后出现不可达代码 
        'no-new-wrappers': 'error', // 禁止通过 new 操作符使用 String、Number 和 Boolean 
        'new-cap': 'off', // 要求构造函数首字母大写 
        'max-len': ['error', 100], // 每行字符不能超过100个
        'no-multiple-empty-lines': 'error', // 不允许多个空行 
        'curly': ["error", "multi-line"], // if、else if、else、for、while强制使用大括号，但允许在单行中省略大括号。
    }
}


 // "off" or 0 - turn the rule off
 // "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 // "error" or 2 - turn the rule on as an error (exit code will be 1)
