'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  store.user = data.user
  $('#message').text('Signed up successfully') // .text() method allows us to set its text in the html
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').hide()
  console.log('signUpSuccess ran. data is:', data)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully') // .text() method allows us to set its text in the html
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').hide()
  $('#sign-in').hide()
  console.log('signInSuccess ran. data is:', data)
}

const signUpFailure = data => {
  store.user = data.user
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. data is:', data)
}

const signInFailure = data => {
  store.user = data.user
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure ran. data is:', data)
}
const changePasswordSuccess = data => {
  store.user = data.user
  $('#message').text('Password Changed Successfully')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('changePasswordSuccess ran. data is:', data)
}

const changePasswordFailure = data => {
  store.user = data.user
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure ran. data is:', data)
}

const signOutFailure = data => {
  store.user = data.user
  $('#message').text('Error Logging Out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure ran. data is:', data)
}

const signOutSuccess = data => {
  store.user = null
  $('#message').text('Logged Out Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#board-container').empty()
  $('#sign-up').show()
  $('#sign-in').show()
  console.log('signOutSuccess ran. data is:', data)
}

const createGameSuccess = data => {
  $('#message').text('Created New Game')
  $('#message').removeClass()
  $('#message').addClass('success')
  store.gameId = data.game.id
  $('.box').show()
  console.log('New Game Created. Good Luck!')
  console.log(store.gameId)
  console.log(store.user)
  // console.log(store.email) UNDEFINED
}
// .on('click, events.onCreateGameClick')

// const resetGame = () => {
//   $('#restartGame').on('click') = function () {
    
//   }
// }

const createGameFailure = data => {
  $('#message').text('Create Game Error')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#board-container').empty()
}

module.exports = {
  // resetGame,
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  createGameSuccess,
  createGameFailure
}
