'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let winningMessage = ''
let numberOfTurns = 0
let currentPlayer = ''
let winningPlayer = ''
let gameBoard = ['', '', '', '', '', '', '', '', '']
let serverData

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onSquareClick = event => {
  event.preventDefault()
  const js = (event.target)

  if (numberOfTurns % 2 === 0 && js.innerHTML === '' && winningPlayer === '') {
    currentPlayer = 'x'
    $('#message').text('It s currently O turn')
    js.innerHTML = currentPlayer
    numberOfTurns++
    checkForWinner()
  } if (numberOfTurns % 2 === 1 && js.innerHTML === '' && winningPlayer === '') {
    currentPlayer = 'o'
    $('#message').text('It s currently X turn')
    js.innerHTML = currentPlayer
    numberOfTurns++
    checkForWinner()
  }
  sendToServer()
}

const checkForWinner = function () {
  const moves = Array.prototype.slice.call($('.box'))
  const results = moves.map((square) => {
    return square.innerHTML
  })
  gameBoard = results
  if (numberOfTurns > 4) {
    if (results[0] !== '' && results[0] === results[1] && results[1] === results[2]) {
      winningMessage = ('Match 0-1-2 top row')
      winningPlayer = results[0]
      sendWinner(winningPlayer)
    }
    if (results[0] !== '' && results[0] === results[3] && results[3] === results[6]) {
      winningMessage = ('Match 0-3-6 left column')
      winningPlayer = results[0]
      sendWinner(winningPlayer)
    }
    if (results[0] !== '' && results[0] === results[4] && results[4] === results[8]) {
      winningMessage = ('Match 0-4-8 diagonal top left to bottom right')
      winningPlayer = results[0]
      sendWinner(winningPlayer)
    }
    if (results[1] !== '' && results[1] === results[4] && results[4] === results[7]) {
      winningMessage = ('Match 1-4-7 center column')
      winningPlayer = results[1]
      sendWinner(winningPlayer)
    }
    if (results[2] !== '' && results[2] === results[5] && results[5] === results[8]) {
      winningMessage = ('Match 2-5-8 right column')
      winningPlayer = results[2]
      sendWinner(winningPlayer)
    }
    if (results[3] !== '' && results[3] === results[4] && results[4] === results[5]) {
      winningMessage = ('Match 3-4-5 center row')
      winningPlayer = results[3]
      sendWinner(winningPlayer)
    }
    if (results[2] !== '' && results[2] === results[4] && results[4] === results[6]) {
      winningMessage = ('Match 2-4-6 bottom left to top right')
      winningPlayer = results[2]
      sendWinner(winningPlayer)
    }
    if (results[6] !== '' && results[6] === results[7] && results[7] === results[8]) {
      winningMessage = ('Match 6-7-8 bottom row')
      winningPlayer = results[6]
      sendWinner(winningPlayer)
      
    }
  }
  if (numberOfTurns >= 9) {
    winningPlayer = 'tie'
    $('.msg').text('nobody wins! Its a tie!')
    $('.msg').show()
    $('#message').hide()
  }
}

const checkGameOver = function () {
  if (winningPlayer === '') {
    return false
  } else
  return true
}
const sendWinner = function (winner) {
  event.preventDefault()
  winningPlayer = winner
  $(".msg").text(winningPlayer + ' wins!!!')
  $(".msg").show()
}

const onCreateGameClick = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('.box').html('')
  $('.msg').hide()
  winningPlayer = ''
  winningMessage = ''
  gameBoard = ['', '', '', '', '', '', '', '', '']
  numberOfTurns = 0
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onResetGame = function (event) {
  event.preventDefault()
  $('.box').html('')
  $('.msg').hide()
  winningPlayer = ''
  winningMessage = ''
  gameBoard = ['', '', '', '', '', '', '', '', '']
  numberOfTurns = 0
  // api.resetGame() should clear game board
  // $('restartGame').
}

const sendToServer = function () {

const index = $(event.target).attr('id')
const value = currentPlayer
const over = checkGameOver()

  const serverData = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  }
  if (over === false) {
  api.newMove(JSON.stringify(serverData))
  }
}

const showGames = function (event) {
  event.preventDefault()
  api.getGames(store.user.id)
  $('#message').text(store.games + ' games have been played by this user')
}

module.exports = {
  store,
  serverData,
  numberOfTurns,
  game,
  gameBoard,
  currentPlayer,
  winningPlayer,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSquareClick,
  checkForWinner,
  onCreateGameClick,
  onResetGame,
  winningMessage,
  sendToServer,
  checkGameOver,
  showGames
}