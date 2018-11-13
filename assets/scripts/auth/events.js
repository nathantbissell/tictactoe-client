'use strict'
// main pipeline for your code
// events requires all of your different sections of code

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let playeroMoves = []
let playerxMoves = []
let position = ''

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
  if (store.numberOfTurns % 2 === 0 && js.innerHTML === '' && store.winningPlayer === '') {
    store.currentPlayer = 'x'
    js.innerHTML = store.currentPlayer //p1
    store.numberOfTurns++
    checkForWinner(playerxMoves, store.currentPlayer) //p1
  } if (store.numberOfTurns % 2 === 1 && js.innerHTML === '' && store.winningPlayer === '') {
    store.currentPlayer = 'o'
    js.innerHTML = store.currentPlayer //p2
    store.numberOfTurns++
    checkForWinner(playeroMoves, store.currentPlayer) //p2
  }
}

const checkForWinner = function (array, player) {
  const moves = Array.prototype.slice.call($('.box'))
  const results = moves.map((square) => {
    return square.innerHTML
  })
  console.log(results) // we want to pass this to our API as the game board!
  store.gameBoard = results
  if (store.numberOfTurns > 4) {
    if (results[0] !== '' && results[0] === results[1] && results[1] === results[2]) {
      // put all this shit in a method you fucking idiot!
      position = ('Match 0-1-2 top row')
      store.winningPlayer = results[0]
      console.log(store.winningPlayer + ' ' + position)
      $('.wins').html(store.winningPlayer + ' Wins!!!')
      $('.wins').show()
      store.games.cells.push(results)
    }
    if (results[0] !== '' && results[0] === results[3] && results[3] === results[6]) {
      console.log('Match 0-3-6 left column')
      store.winningPlayer = results[0]
      console.log(store.winningPlayer)
      $('wins').text(store.winningPlayer + ' Wins!!!')
      $('wins').show()
    }
    if (results[0] !== '' && results[0] === results[4] && results[4] === results[8]) {
      console.log('Match 0-4-8 diagonal top left to bottom right')
      store.winningPlayer = results[0]
      console.log(store.winningPlayer)
      $('wins').text(store.winningPlayer + ' Wins!!!')
      $('wins').show()
    }
    if (results[1] !== '' && results[1] === results[4] && results[4] === results[7]) {
      console.log('Match 1-4-7 center column')
      store.winningPlayer = results[1]
      console.log(store.winningPlayer)
      $('wins').text(store.winningPlayer + ' Wins!!!')
      $('wins').show()
    }
    if (results[2] !== '' && results[2] === results[5] && results[5] === results[8]) {
      console.log('Match 2-5-8 right column')
      store.winningPlayer = results[2]
      console.log(store.winningPlayer)
      $('wins').text(store.winningPlayer + ' Wins!!!')
      $('wins').show()
    }
    if (results[3] !== '' && results[3] === results[4] && results[4] === results[5]) {
      console.log('Match 3-4-5 center row')
      store.winningPlayer = results[3]
      console.log(store.winningPlayer)
      $('wins').text(store.winningPlayer + ' Wins!!!')
      $('wins').show()
    }
    if (results[2] !== '' && results[2] === results[4] && results[4] === results[6]) {
      console.log('Match 2-4-6 bottom left to top right')
      store.winningPlayer = results[2]
      console.log(store.winningPlayer)
      $('wins').text(store.winningPlayer + ' Wins!!!')
      $('wins').show()
    }
    if (results[6] !== '' && results[6] === results[7] && results[7] === results[8]) {
      console.log('Match 6-7-8 bottom row')
      store.winningPlayer = results[6]
      console.log(store.winningPlayer)
      $('wins').text(store.winningPlayer + ' Wins!!!')
      $('wins').show()
    }
  }
}

const onCreateGameClick = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)

    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
// TO DO: save response from server in ui.handleSuccessfulCreate
// put the game object in store
// .then(console.log) // eventually have ui.handleSuccessfulCreate
//  .catch(console.error) // eventually have ui.handleErrorCreate

const onResetGame = function (event) {
  event.preventDefault()
  // api.resetGame()
  // $('restartGame').
}
const printWinner = function () {
  event.preventDefault()
  $('wins').show()
}

const sendToServer = function (currBoard, currPlayer) {
// JSON.stringify()
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSquareClick,
  checkForWinner,
  onCreateGameClick,
  onResetGame,
  position,
  printWinner,
  sendToServer

}
