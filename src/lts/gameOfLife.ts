export const gameOfLife = (board: number[][]): string => {
  const deaths = [];
  const births = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const currCell = board[row][col];

      const ntl = board[row - 1]?.[col - 1] ?? 0;
      const ntm = board[row - 1]?.[col] ?? 0;
      const ntr = board[row - 1]?.[col + 1] ?? 0;
      const nl = board[row]?.[col - 1] ?? 0;
      const nr = board[row]?.[col + 1] ?? 0;
      const nbl = board[row + 1]?.[col - 1] ?? 0;
      const nbm = board[row + 1]?.[col] ?? 0;
      const nbr = board[row + 1]?.[col + 1] ?? 0;

      const neighborTotalSum = ntl + ntm + ntr + nl + nr + nbl + nbm + nbr;

      if (currCell === 0 && neighborTotalSum === 3) {
        births.push([row, col]);
      } else if (neighborTotalSum < 2) {
        deaths.push([row, col]);
      } else if (neighborTotalSum > 3) {
        deaths.push([row, col]);
      }
    }
  }
  for (const death of deaths) {
    board[death[0]][death[1]] = 0;
  }
  for (const birth of births) {
    board[birth[0]][birth[1]] = 1;
  }

  return JSON.stringify(board);
};
