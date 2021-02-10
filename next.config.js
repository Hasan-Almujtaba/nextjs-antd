// next.config.js
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  modifyVars: { 
    'primary-color': '#6c5ce7',
   },
  // optional
  lessVarsFilePath: "./styles/variable.less",
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
