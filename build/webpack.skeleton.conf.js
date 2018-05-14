const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const chalk = require('chalk');
const rm = require('rimraf');
const fs = require('fs')
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
const config = require('../config');


const skeletonWebpackConfig = {
  target: 'node',
  entry: {
    skeleton: path.resolve(__dirname, '../skeleton/skeleton.entry.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueSSRServerPlugin({
      filename: 'skeleton.json'
    })
  ]
}

console.log(chalk.cyan('  Build for skeleton ...\n'));

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  webpack(skeletonWebpackConfig, (err, stats) => {
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    );

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }
    console.log(chalk.cyan('  Build complete in skeleton.json ...\n'));
    // 读取`skeleton.json`，以`index.html`为模板写入内容
    const renderer = createBundleRenderer(path.resolve(__dirname, '../dist/skeleton.json'), {
      template: fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
    })

    // 把上一步模板完成的内容写入（替换）`index.html`
    renderer.renderToString({}, (err, html) => {
      fs.writeFileSync(path.resolve(__dirname, '../index.html'), html, 'utf-8')
    })
    console.log(chalk.cyan('  R/Wskeleton config  in index.html ...\n'));
    console.log(chalk.cyan('  Build skeleton complete.\n'));
  });


});