'use strict'

const config = require('../config.js')
const store = require('../store.js')
const info = require('./info.js')

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
    data
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + info.user.token
    },
    data
    // data: data
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + info.user.token
    },
    data: {}
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + info.token
    }
  })
}

const newGame = data => {
  console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + info.user.token
    },
    data: data
  })
}

const newMove = data => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + info.user.token
    },
    data: data
  })
}

const completeGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + info.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
  newMove,
  completeGames,
  createGame
}
