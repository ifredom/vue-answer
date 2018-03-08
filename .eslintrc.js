module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaVersion: 6, // 语言版本es6
    // sourceType: 'module' // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    parser: 'babel-eslint'
  },
  globals: {
    api: true,
    $api: true,
    NODE_ENV: true
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ]
}
