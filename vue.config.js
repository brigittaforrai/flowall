const path = require('path')

let publicP

// todo .env
// const domain = 'brigittaforrai.com'
const domain = 'flowall.space'

const production = process.env.NODE_ENV === "production"


if (production) {
  publicP = (domain === 'brigittaforrai.com') ? 'designhet2019' : '/'
} else {
  publicP = '/'
}
const output = domain === 'brigittaforrai.com' ? 'docs' : 'dist'

module.exports = {
  publicPath: publicP,
  outputDir: output,
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
