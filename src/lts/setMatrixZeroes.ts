// less efficient solution has:
// time complexity: O(n * m)
// space: O(n + m)
// completed this in 8 minutes
export const setZeroes = (matrix: number[][]): string => {
  const track = [];

  // find all 0 pos
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        track.push([row, col]);
      }
    }
  }
  for (const pos of track) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[pos[0]][i] = 0;
    }
    for (const element of matrix) {
      element[pos[1]] = 0;
    }
  }
  return JSON.stringify(matrix);
};

// better solution
// time: O(n * m)
// space: O(1)
export const setZeroesBest = (matrix: number[][]): void => {
  // track if column 1 needs to be set to 0
  let col1 = 0;
  // find all 0 pos
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        if (col == 0) {
          col1 = 1;
        } else {
          matrix[row][0] = 0;
          matrix[0][col] = 0;
        }
      }
    }
  }
  for (let row = matrix.length - 1; row >= 0; row--) {
    for (let col = matrix[0].length - 1; col >= 0; col--) {
      if (col === 0) {
        if (col1 === 1) {
          matrix[row][col] = 0;
        }
      } else {
        if (matrix[row][0] === 0 || matrix[0][col] === 0) {
          matrix[row][col] = 0;
        }
      }
    }
  }
};
