export const rotateImage = (matrix: number[][]): string => {
  for (let row = 0; row < matrix[0].length; row++) {
    for (let col = row; col < matrix.length; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }
  for (const r of matrix) {
    r.reverse();
  }
  return JSON.stringify(matrix);
};
