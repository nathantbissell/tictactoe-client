'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up', // api url is stored in the file, called by config above
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in', // api url is stored in the file, called by config above
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out', // api url is stored in the file, called by config above
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
