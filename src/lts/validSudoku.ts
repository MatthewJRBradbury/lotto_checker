export const isValidSudoku = (board: string[][]): boolean => {
  let currRow: Map<string, number>;
  const col: Map<string, number>[] = [];
  const box: Map<string, number>[] = [];

  for (let r = 0; r < board.length; r++) {
    currRow = new Map<string, number>();
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] !== '.') {
        // for rows
        if (currRow.has(board[r][c])) {
          return false;
        }
        currRow.set(board[r][c], 1);
        // columns
        if (!col[c]) {
          col[c] = new Map<string, number>();
        }
        if (col[c].has(board[r][c])) {
          return false;
        }
        col[c].set(board[r][c], 1);
        // boxes
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (!box[boxIndex]) {
          box[boxIndex] = new Map<string, number>();
        }
        if (box[boxIndex].has(board[r][c])) {
          return false;
        }
        box[boxIndex].set(board[r][c], 1);
      }
    }
  }
  return true;
};

// clever solution only needs 1 set due to template literals
export function isValidSudokuClever(board: string[][]): boolean {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === '.') continue;
      const row = `row: ${i}, value: ${cell}`;
      const column = `column: ${j}, value: ${cell}`;
      const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const box = `boxNumber: ${boxNumber}, value: ${cell}`;
      if (set.has(row) || set.has(column) || set.has(box)) return false;
      set.add(row).add(column).add(box);
    }
  }
  return true;
}
