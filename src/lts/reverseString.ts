export const reverseString = (str: string): string => {
  let rev = '';
  if (str) {
    rev = str.split('').reverse().join('');
  }
  return rev;
};
