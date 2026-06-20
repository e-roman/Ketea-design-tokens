const StyleDictionary = require('style-dictionary');

// Transform: convierte PascalCase de Ketea a kebab-case para CSS
StyleDictionary.registerTransform({
  name: 'name/ketea/kebab',
  type: 'name',
  transformer: (token) =>
    token.path
      .join('-')
      .toLowerCase()
      .replace(/\s+/g, '-'),
});

// Transform: agrega 'px' a valores numéricos de spacing/sizing/radius/border
StyleDictionary.registerTransform({
  name: 'value/ketea/px',
  type: 'value',
  matcher: (token) =>
    ['spacing', 'borderRadius', 'sizing', 'borderWidth'].includes(token.type),
  transformer: (token) => {
    const val = parseFloat(token.value);
    return isNaN(val) ? token.value : `${val}px`;
  },
});

// Transform group personalizado
StyleDictionary.registerTransformGroup({
  name: 'ketea/css',
  transforms: ['attribute/cti', 'name/ketea/kebab', 'value/ketea/px', 'color/css'],
});

StyleDictionary.registerTransformGroup({
  name: 'ketea/js',
  transforms: ['attribute/cti', 'name/camel', 'value/ketea/px', 'color/css'],
});

module.exports = {
  source: ['tokens/ketea-tokens.json'],

  platforms: {
    // ─── CSS Variables ───────────────────────────────────────────
    css: {
      transformGroup: 'ketea/css',
      prefix: 'ketea',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },

    // ─── JavaScript ESM ──────────────────────────────────────────
    js: {
      transformGroup: 'ketea/js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },

    // ─── Tailwind theme object ────────────────────────────────────
    tailwind: {
      transformGroup: 'ketea/js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tailwind-tokens.js',
          format: 'javascript/module',
          filter: (token) =>
            ['color', 'spacing', 'borderRadius', 'borderWidth', 'sizing', 'fontSizes', 'fontWeights', 'fontFamilies', 'lineHeights', 'boxShadow', 'opacity'].includes(token.type),
        },
      ],
    },
  },
};
