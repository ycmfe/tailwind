const theme = require('./themes')
const isProd = process.env.production === 'production'

module.exports = {
  purge: {
    enabled: isProd,
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.ts'],
  },
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme,
  variants: {},
  plugins: [],
}
