export const fibonacci = (num: number): number[] => {
  const result: number[] = [0, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};
