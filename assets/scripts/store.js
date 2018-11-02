'use strict'
const store = {
}

const numberOfTurns = 0
const p1 = 'X'
const p2 = 'O'
const currentPlayer = 'X'

const plMoves = []
// logs the positions in which p1 has a X at
const p2Moves = []
// logs the position in which p2 has a O at

const game = {
  pregame: true,
  // if the game status is at pregame, game board is hidden
  start: false,
  // if game has started, game board appears and has 0 marks on it
  end: false
  // if end is set to true, winning message will appear on page and users cannot enter any more
}

const gameBoard = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8]
]

const winningCombos = [
  ['0', '1', '2'],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

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
  store,
  numberOfTurns,
  game,
  gameBoard,
  p1,
  p2,
  winningCombos,
  currentPlayer,
  plMoves,
  p2Moves
}
