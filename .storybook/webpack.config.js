const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.
  function resolve(dir) {
    return path.join(__dirname, '..', dir);
  }

  config.resolve = {
    extensions: ['.js', '.vue', '.json','.jsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  };

  return config;
};
