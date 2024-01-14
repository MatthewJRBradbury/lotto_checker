export const sumEvenOddIndexes = (arr: number[], bool: boolean): number => {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (let i = bool ? 0 : 1; i < arr.length; i += 2) {
    sum += arr[i];
  }

  return sum;
};
