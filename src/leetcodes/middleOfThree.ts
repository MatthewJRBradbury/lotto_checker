export const middle = (val1: number, val2: number, val3: number): number => {
  const nums = [val1, val2, val3];
  const sorted = nums.sort((a: number, b: number) => a - b);
  return sorted[1];
};
