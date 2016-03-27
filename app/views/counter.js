/**
 * Imports
 */

var style = require('../styles')
var inject = require('inject-inline-style')
var extend = require('xtend')
var dom = require('yo-yo')

/**
 * Counter
 */

function Counter(state) {
  return dom`
    <div class="counter">
      <p class="number">${state.count}</p>
      <button class="button" onclick=${state.increment}>Increment</button>
      <button class="button" onclick=${state.decrement}>Decrement</button>
    </div>
  `
}

var styles = inject({
  '.counter': {
    padding: '1em',
    fontFamily: 'sans-serif'
  },

  '.number': {
    fontSize: '1.5em'
  },

  '.button': extend(style.button, {
    padding: '0.25em 0.375em'
  })
})

/**
 * Exports
 */

module.exports = Counter
module.exports.styles = styles
