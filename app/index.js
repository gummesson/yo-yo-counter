/**
 * Imports
 */

var App = require('./views/app')
var initialState = require('./store/state')
var store = require('./store')
var document = require('global/document')
var dom = require('yo-yo')

/**
 * DOM
 */

var root = document.getElementById('root')
var app = App(initialState)
root.appendChild(app)

store.subscribe(function() {
  var state = store.getState()
  var patch = App(state)
  dom.update(root, patch)
})
