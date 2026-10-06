const StyleDictionary = require('style-dictionary');

module.exports = {
  source: ['tokens/ketea-tokens.json'],

  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ketea',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: false,
          },
        },
      ],
    },

    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },

    tailwind: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tailwind-tokens.js',
          format: 'javascript/module',
        },
      ],
    },
  },
};
