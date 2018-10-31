'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

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

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
