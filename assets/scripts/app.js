'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const x = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', x.onSignUp)
  $('#sign-in').on('submit', x.onSignIn)
  $('#sign-out').on('submit', x.onSignOut)
})
