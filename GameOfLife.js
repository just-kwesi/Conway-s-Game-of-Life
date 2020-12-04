class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
    let array = new Array(this.height);
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(this.width).fill(0);
    }
    return array;
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  getCell(row, col) {
    if (row < 0 || col < 0) return 0;
    if (col >= this.width || row >= this.height) return 0;
    let cell = this.board[row][col];
    return cell;
  }

  setCell(value, row, col) {
    if (!(row < 0 || col < 0)) {
      this.board[row][col] = value;
    }
  }

  toggleCell(row, col) {
    this.board[row][col] = this.board[row][col] ? 0 : 1;
  }

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let liveNeighbors = 0;
    for (let i = row - 1; i < row + 2; i++) {
      for (let j = col - 1; j < col + 2; j++) {
        if (this.getCell(i, j) === 1) {
          liveNeighbors++;
        }
      }
    }
    if (this.getCell(row, col) === 1) liveNeighbors--;
    return liveNeighbors;
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let aliveNeighbors = this.livingNeighbors(i, j);
        if (aliveNeighbors > 3) {
          newBoard[i][j] = 0;
        } else if (aliveNeighbors < 2) {
          newBoard[i][j] = 0;
        } else if (aliveNeighbors === 3) {
          newBoard[i][j] = 1;
        } else {
          newBoard[i][j] = this.board[i][j] ? 1 : 0;
        }
      }
    }

    this.board = newBoard;
  }
}
