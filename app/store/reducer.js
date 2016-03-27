/**
 * Imports
 */

var types = require('./types')
var extend = require('xtend')

/**
 * Reducer
 */

function reducer(state, action) {
  switch (action.type) {
  case types.INCREMENT:
    return extend(state, {
      count: state.count + 1
    })
  case types.DECREMENT:
    return extend(state, {
      count: state.count - 1
    })
  default:
    return state
  }
}

/**
 * Exports
 */

module.exports = reducer
