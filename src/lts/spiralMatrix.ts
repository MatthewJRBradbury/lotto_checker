export const spiralOrder = (matrix: number[][]): number[] => {
  // If the matrix is empty, return an empty array
  if (!matrix?.length) return [];

  const result: number[] = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Move right
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }
    startRow++;
    // Move down
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }
    endCol--;
    // Move left
    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        result.push(matrix[endRow][col]);
      }
      endRow--;
    }
    // Move up
    if (startCol <= endCol) {
      for (let row = endRow; row > startRow - 1; row--) {
        result.push(matrix[row][startCol]);
      }
      startCol++;
    }
  }
  return result;
};
