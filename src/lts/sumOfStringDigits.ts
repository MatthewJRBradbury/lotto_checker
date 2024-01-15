export const sumOfStringDigits = (str: string): number => {
  if (str.length === 0) return -1;

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      sum += Number(str[i]);
    }
  }

  return sum === 0 ? -1 : sum;
};
