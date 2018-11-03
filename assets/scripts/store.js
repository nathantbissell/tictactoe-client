'use strict'

const numberOfTurns = 0
const p1 = 'X'
const p2 = 'O'
const currentPlayer = 'X'

const game = {
  start: false,
  // if game has started, game board appears and has 0 marks on it
  end: true
  // if end is set to true, winning message will appear on page and users cannot enter any more
}

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
  currentPlayer
}
