const production = process.env.NODE_ENV === "production"

module.exports = {
  publicPath: production ? '/designhet2019' : '/' ,
  outputDir: 'docs'
}
