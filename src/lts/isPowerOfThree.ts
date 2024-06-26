export const isPowerOfThree = (n: number) => {
  while (n % 3 === 0 && n > 1) {
    n /= 3;
  }
  return n === 1;
};
