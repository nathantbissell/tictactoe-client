'use strict'
// main pipeline for your code
// events requires all of your different sections of code

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const p1 = 'X'
const p2 = 'O'
const playerxMoves = []
const playeroMoves = []

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
  // take this data and send it to our server
  // using an http request (POST)
  api.signIn(data)
    .then(ui.signInSuccess) // if your request was successful
    .catch(ui.signInFailure) // if your request failed
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
  if (store.numberOfTurns % 2 === 1 && js.innerHTML === '') {
    js.innerHTML = p1
    store.numberOfTurns++
    playerxMoves.push(js.id)
    console.log('player 1: ' + playerxMoves)
    console.log('player x: ' + playeroMoves)
    // forEach loop that takes the array of player x moves and searches for
    // a match in the winningCombos array.
  } if (store.numberOfTurns % 2 === 0 && js.innerHTML === '') {
    js.innerHTML = p2
    store.numberOfTurns++
    playeroMoves.push(js.id)
    console.log('player 1: ' + playerxMoves)
    console.log('player x: ' + playeroMoves)
    // forEach loop that takes the array of player o moves and searches for
    // a match in the winningCombos array.
  }
}
// && !jq.html
// this function takes in an event (click) on one of the 9 squares
//  const data = getFormFields(event.target)
// when this function is called, either player x or O will mark

// that square with their game piece.

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSquareClick
}
