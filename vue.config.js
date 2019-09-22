const path = require("path");
const production = process.env.NODE_ENV === "production"

module.exports = {
  publicPath: production ? '/designhet2019' : '/' ,
  outputDir: path.resolve(__dirname, "docs")
}
