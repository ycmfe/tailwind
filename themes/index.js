const colors = require('./colors')
const screens = require('./screens')
const spacing = require('./spacing')
const borderRadius = require('./borderRadius')
const boxShadow = require('./boxShadow')
const opacity = require('./opacity')

module.exports = {
  ...colors(),
  ...screens(),
  ...spacing(),
  ...borderRadius(),
  ...boxShadow(),
  ...opacity(),
}
