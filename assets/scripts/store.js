'use strict'
const info = {
}

const games = [
  {
    id: undefined,
    cells: ["","","","","","","","",""],
    over: false,
    player_x: {
      id: undefined,
      email: ''
    }
  }
  ]

  const player = {
    wins: undefined,
    losses: undefined,
    gamesPlayed: undefined
  }

const numberOfTurns = 0
const currentPlayer = ''
const winningPlayer = ''

const player_x = ''
const player_o = ''

const gameBoard = ['', '', '', '', '', '', '', '', '']
// this function will run when turn number 4 has been ran (numberOfTurns > 4)
// if true, run a loop that will take the array of player's current position points
// compare to winningCombos, if any are true, game.end = true

// const user = !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// store token in here
// store.user.token would allow changing password
//

// const game = !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const userSignedIn = !!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = {
  info,
  numberOfTurns,
  game,
  gameBoard,
  player_x,
  player_o,
  currentPlayer,
  winningPlayer
}
