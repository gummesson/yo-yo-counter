/**
 * Imports
 */

var types = require('./types')

/**
 * Actions
 */

function increment() {
  return {
    type: types.INCREMENT
  }
}

function decrement() {
  return {
    type: types.DECREMENT
  }
}

/**
 * Exports
 */

module.exports = {
  increment: increment,
  decrement: decrement
}
