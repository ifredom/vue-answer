'use strict';
require('./check-versions')();

process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
var shell = require('shelljs');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, (err, stats) => {
        spinner.stop();
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

        console.log(chalk.cyan('  Build complete.\n'));
        var cppath = path.resolve(__dirname, '../widget');
        var bb = ora(
            '开始复制，将build生成内容复制一份到 ' + cppath + ' 文件夹中...\n\n'
        ).start();

        rm(path.join(cppath, 'static'), err => {
            if (err) throw console.warn(err);
            shell.cp('-Rf', path.join(config.build.assetsRoot, '/*'), cppath);
            console.log(chalk.cyan('  复制完成'));
            bb.stop();
        });
    });
});
