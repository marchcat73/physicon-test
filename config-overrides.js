module.exports = (config) => {
  require('react-app-rewire-postcss')(config, {
    plugins: (loader) => [
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      }),
      require('postcss-safe-parser'),
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-extend'),
      require('postcss-css-variables'),
      require('postcss-flexbugs-fixes'),
      require('postcss-simple-vars')({
        silent: true,
      }),
    ],
  });

  return config;
};
