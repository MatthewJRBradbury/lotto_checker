export const factorial = (num: number): number => {
  if (num === 1) return num;
  return num * factorial(num - 1);
};
