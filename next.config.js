const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript();

module.exports = withCSS({
  /* my next config */
  // cssModules: true
});
