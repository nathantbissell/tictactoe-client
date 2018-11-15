'use strict'

// entry point for application code

const events = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('#create-game').on('submit', events.onCreateGameClick)
  $('.box').on('click', events.onSquareClick)
  $('#restartGame').on('click', events.onResetGame)

  // $('board-container').on('create')
})
