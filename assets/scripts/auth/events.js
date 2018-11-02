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
const winner = 'You win!'

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
  if (store.numberOfTurns % 2 === 0 && js.innerHTML === '') {
    js.innerHTML = p1
    playerxMoves.push(js.id)
    store.numberOfTurns++
    console.log('js id ' + js.id)
    console.log('current array for player x: ' + playerxMoves)
    console.log('Winning Combinations: ' + store.winningCombos)
    checkForWinner(playerxMoves, p1)
    // checkForWinner(playerxMoves, p1)
  } if (store.numberOfTurns % 2 === 1 && js.innerHTML === '') {
    js.innerHTML = p2
    playeroMoves.push(js.id)
    store.numberOfTurns++
    console.log('js id ' + js.id)
    console.log('current array for player o: ' + playeroMoves)
    console.log('Winning Combinations: ' + store.winningCombos)
    checkForWinner(playeroMoves, p2)
    // checkForWinner(playeroMoves, p2)
    // forEach loop that takes the array of player o moves and searches for
    // a match in the winningCombos array.
  }
}
// const checkForWinner = function (array, player) {
//   console.log('checkforwinner is running')
//   console.log(store.numberOfTurns)
//   if (store.numberOfTurns > 4) {
//     for (let i = 0; i < store.winningCombos; i++) {
//       console.log('entered for loop')
//       if (array[i] === store.winningCombos[i]) {
//         console.log('first match met')
//         if (array[i++] === store.winningCombos[i++]) {
//           console.log('second match met')
//           if (array[i++] === store.winningCombos[i++]) {
//             return (player + 'is the winner!')
//           }
//         }
//       }
//     }
//   }
// }
// combo checkForWinner function for later point if necessary.
const checkForWinner = function (array, player) {
  if (store.numberOfTurns > 4) {
    const moves = Array.prototype.slice.call($('.box'))
    const results = moves.map((square) => {
      return square.innerHTML
    })
    console.log(results)
    for (let i = 0; i < store.winningCombos.length; i++) {
      return store.winningCombos.find(function (combo) {
        console.log('combo 0: ' + results[combo[0]])
        console.log('combo 1: ' + results[combo[1]])
        console.log('combo 2: ' + results[combo[2]])
        if (results[combo[0]] !== '' && ((results[combo[0]] === results[combo[1]]) && (results[combo[1]] === results[combo[2]]))) {
          return winner
        } else return false
      })
      //  console.log(player + ' is the winner')
      // return
    }
  }
}

// this function takes in an event (click) on one of the 9 squares
//  const data = getFormFields(event.target)
// when this function is called, either player x or O will mark

// that square with their game piece.

const onCreateGameClick = function (event) {
  api.createGame()
  // TO DO: save response from server in ui.handleSuccessfulCreate
  // put the game object in store
    .then(console.log) // eventually have ui.handleSuccessfulCreate
    .catch(console.error) // eventually have ui.handleErrorCreate
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSquareClick,
  checkForWinner,
  onCreateGameClick
}
