/**
 * Imports
 */

var reducer = require('./reducer')
var state = require('./state')
var createStore = require('redux').createStore

/**
 * Store
 */

var store = createStore(reducer, state)

/**
 * Exports
 */

module.exports = store
