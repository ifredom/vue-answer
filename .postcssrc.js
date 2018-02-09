module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'autoprefixer': {}
    }
};

// 响应式方案一，引入rem.js
// 响应式方案二，使用postcss进行设置
// module.exports = {
//     plugins: {
//         'postcss-import': {},
//         'postcss-url': {},
//         'postcss-aspect-ratio-mini': {},
//         'postcss-write-svg': {
//             utf8: false
//         },
//         // postcss read : https://www.w3cplus.com/mobile/vw-layout-in-vue.html
//         // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。著作权归作者所有。
//         'postcss-cssnext': {},
//         'postcss-px-to-viewport': {
//             viewportWidth: 750, // (Number) The width of the viewport.
//             viewportHeight: 1334, // (Number) The height of the viewport.
//             unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
//             viewportUnit: 'vw', // (String) Expected units.
//             selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
//             minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
//             mediaQuery: false // (Boolean) Allow px to be converted in media queries.
//         },
//         'postcss-viewport-units': {},
//         cssnano: {
//             preset: 'advanced',
//             autoprefixer: false,
//             'postcss-zindex': false
//         }
//     }
// };
