'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully') // .text() method allows us to set its text in the html
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. data is:', data)
}

const signInSuccess = data => {
  console.log(data.user.token)
  store.user = data.user
  $('#message').text('Signed in successfully') // .text() method allows us to set its text in the html
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. data is:', data)
}

const signUpFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. data is:', data)
}

const signInFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure ran. data is:', data)
}
const changePasswordSuccess = data => {
  $('#message').text('Password Changed Successfully')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.log('changePasswordSuccess ran. data is:', data)
}

const changePasswordFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure ran. data is:', data)
}

const signOutFailure = data => {
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
  console.log('signOutSuccess ran. data is:', data)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
