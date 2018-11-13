'use strict'

const games = [
  {
    id: 1,
    cells: ["","","","","","","","",""],
    over: true,
    player_x: {
      id: 1,
      email: ''
    }
    player_o: {
      id: 0,
      email: ''
    }
  ]
}

const numberOfTurns = 0
const p1 = 'X'
const p2 = 'O'
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
  numberOfTurns,
  game,
  gameBoard,
  p1,
  p2,
  player_x,
  player_o,
  currentPlayer,
  winningPlayer
}
