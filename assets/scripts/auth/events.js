'use strict'
// main pipeline for your code
// events requires all of your different sections of code

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let playeroMoves = []
let playerxMoves = []
let winningMessage = ''

let numberOfTurns = 0
let currentPlayer = ''
let winningPlayer = ''
let player_x = ''
let player_o = ''
let gameId = null
let gameBoard = ['', '', '', '', '', '', '', '', '']

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an http request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was successful
    .catch(ui.signUpFailure) // if your request failed
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
  // take this data and send it to our server
  // using an http request (POST)
  api.changePassword(data)
    .then(ui.changePasswordSuccess) // if your request was successful
    .catch(ui.changePasswordFailure) // if your request failed
}
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) // if your request was successful
    .catch(ui.signOutFailure) // if your request failed
}
const onSquareClick = event => {
  event.preventDefault()
  const js = (event.target)
  if (numberOfTurns % 2 === 0 && js.innerHTML === '' && winningPlayer === '') {
    currentPlayer = 'x'
    js.innerHTML = currentPlayer //p1
    numberOfTurns++
    checkForWinner(playerxMoves, currentPlayer) //p1
  } if (numberOfTurns % 2 === 1 && js.innerHTML === '' && winningPlayer === '') {
    currentPlayer = 'o'
    js.innerHTML = currentPlayer //p2
    numberOfTurns++
    checkForWinner(playeroMoves, currentPlayer) //p2
  }
}
const checkForWinner = function () {
  const moves = Array.prototype.slice.call($('.box'))
  const results = moves.map((square) => {
    return square.innerHTML
  })
  console.log(results) // we want to pass this to our API as the game board!
  gameBoard = results
  if (numberOfTurns > 4) {
    if (results[0] !== '' && results[0] === results[1] && results[1] === results[2]) {
      // put all this shit in a method you fucking idiot!
      winningMessage = ('Match 0-1-2 top row')
      winningPlayer = results[0]
      sendWinner(winningPlayer)
      // store.games.cells.push(results)
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
}

const sendWinner = function (winner) {
  event.preventDefault()
  winningPlayer = winner
  $(".msg").text(winningPlayer + ' wins!!!')
  $(".msg").show()
  console.log(winningPlayer)
  console.log(winningMessage)
}

const onCreateGameClick = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
// TO DO: save response from server in ui.handleSuccessfulCreate
// put the game object in store
// .then(console.log) // eventually have ui.handleSuccessfulCreate
//  .catch(console.error) // eventually have ui.handleErrorCreate

const onResetGame = function (event) {
  event.preventDefault()
  $('.box').html('')
  numberOfTurns = 0
  // api.resetGame() should clear game board
  // $('restartGame').
}

const sendToServer = function (currBoard, currPlayer) {
// JSON.stringify()
}


module.exports = {
  store,
  gameId,
  numberOfTurns,
  game,
  gameBoard,
  player_x,
  player_o,
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
  sendToServer

}
