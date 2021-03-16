module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-flexbugs-fixes')({}),
    require('precss')({}),
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer')({
      remove: false,
    })
  ]
};
