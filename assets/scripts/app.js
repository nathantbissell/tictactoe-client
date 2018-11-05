'use strict'

// entry point for application code

const events = require('./auth/events.js')

$(() => {
  // $('#create-game').on('click', events.onCreateGameClick)
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('.box').on('click', events.onSquareClick)
  $('wins').on('click', events.onSquareClick)

  // $('board-container').on('create')
})
