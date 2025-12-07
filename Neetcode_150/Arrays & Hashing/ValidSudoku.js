/*
36. Valid Sudoku
Solved
Medium
Topics
premium lock icon
Companies
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated 
according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //checking all rows
  for (let row = 0; row < 9; row++) {
    //a set for each row
    const set = new Set();
    //now check every col inside each row
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === ".") continue;
      if (set.has(board[row][col])) return false;
      set.add(board[row][col]);
    }
  }
  //checking all columns
  for (let col = 0; col < 9; col++) {
    //a set for each col
    const set = new Set();
    //now check every row in each col
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === ".") continue;
      if (set.has(board[row][col])) return false;
      set.add(board[row][col]);
    }
  }
  //now lastly checking every sqaure
  for (let square = 0; square < 9; square++) {
    //a set for every square
    const set = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const row = Math.floor(square / 3) * 3 + i;
        const col = Math.floor(square % 3) * 3 + j;
        if (board[row][col] === ".") continue;
        if (set.has(board[row][col])) return false;
        set.add(board[row][col]);
      }
    }
  }
  return true;
};
