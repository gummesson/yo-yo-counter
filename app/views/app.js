/**
 * Imports
 */

var Counter = require('./counter')
var actions = require('../store/actions')
var dispatch = require('../store').dispatch
var bindActionCreators = require('redux').bindActionCreators
var extend = require('xtend')

/**
 * App
 */

function App(state) {
  var creators = bindActionCreators(actions, dispatch)
  var props = extend(state, creators)
  return Counter(props)
}

/**
 * Exports
 */

module.exports = App
