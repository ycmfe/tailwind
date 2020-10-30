const colors = require('./colors')
const screens = require('./screens')
const spacing = require('./spacing')
const borderRadius = require('./borderRadius')

module.exports = {
  ...colors(),
  ...screens(),
  ...spacing(),
  ...borderRadius(),
}
