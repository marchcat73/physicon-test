module.exports = ({ file }) => ({
  parser: file.extname === '.css' ? 'postcss-safe-parser' : false,
});
// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'postcss-flexbugs-fixes': {},
//     'postcss-preset-env': {
//       autoprefixer: {
//         flexbox: 'no-2009',
//       },
//       stage: 3,
//       features: {
//         'custom-properties': false,
//       },
//     },
//     'postcss-css-variables': {},
//     'postcss-nested': {},
//     'postcss-simple-vars': {
//       silent: true,
//     },
//     'postcss-easings': {},
//   },
// };
