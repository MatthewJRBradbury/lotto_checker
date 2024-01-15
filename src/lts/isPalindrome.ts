export const isPalindrome = (str: string): boolean => {
  return str.toLowerCase().split('').reverse().join('') === str;
};
