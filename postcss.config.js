module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-custom-properties')(),
    require('autoprefixer')(),
  ]
}
