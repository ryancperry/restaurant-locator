const postcssPresetEnv = require('postcss-preset-env');

const config = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
      autoprefixer: { grid: 'autoplace' },
    }),
  ],
});

module.exports = config;
