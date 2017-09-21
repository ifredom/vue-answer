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
    }
}


 // "off" or 0 - turn the rule off
 // "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 // "error" or 2 - turn the rule on as an error (exit code will be 1)
