const path = require('path');

// todo .env
const domain = 'brigittaforrai.com'
// const domain = 'flowall.space'

const production = process.env.NODE_ENV === "production"
let publicP

if (production) {
  publicP = (domain === 'brigittaforrai.com') ? 'designhet2019' : '/'
} else {
  publicP = '/'
}

module.exports = {
  publicPath: publicP,
  outputDir: 'docs',
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.configFile = path.resolve(__dirname, ".eslintrc.js");
        return options;
    })
  }
}
