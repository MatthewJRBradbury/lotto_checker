export const countWords = (str: string): number => {
  if (!str || str.length === 0) return 0;

  let count = 0;
  const trimmedStr = str.trim();

  for (let i = 0; i < trimmedStr.length; i++) {
    if (
      (i === 0 && trimmedStr[i] !== ' ') ||
      (trimmedStr[i] === ' ' && trimmedStr[i + 1] !== ' ')
    ) {
      count++;
    }
  }
  return count;
};

export const factorial = (num: number): number => {
  if (num === 1) return num;
  return num * factorial(num - 1);
};

export const isPalindrome = (str: string): boolean => {
  return str.toLowerCase().split('').reverse().join('') === str;
};

export const middle = (val1: number, val2: number, val3: number): number => {
  const nums = [val1, val2, val3];
  const sorted = nums.sort((a: number, b: number) => a - b);
  return sorted[1];
};

export const removeExtraSpaces = (str: string): string => {
  if (!str || str.length === 0) return '';

  let formattedStr = '';
  const trimmedStr = str.trim();

  for (let i = 0; i < trimmedStr.length; i++) {
    if (trimmedStr[i] === ' ' && trimmedStr[i + 1] === ' ') {
      continue;
    }
    formattedStr += trimmedStr[i];
  }
  return formattedStr;
};

export const reverseString = (str: string): string => {
  let rev = '';
  if (str) {
    rev = str.split('').reverse().join('');
  }
  return rev;
};

export const splitStringAtIndex = (str: string, idx: number): string => {
  if (str.length % idx !== 0 || str.length < idx) return '';

  let splitStr = '';

  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % idx === 1) {
      splitStr += ' ';
    }
    splitStr += `${str[i]}${idx === 1 ? ' ' : ''}`;
  }
  return splitStr;
};

export const sumArrByIndex = (arr1: number[], arr2: number[]): number[] => {
  const summedArr = [];
  const len = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < len; i++) {
    const a1v = arr1[i] || 0;
    const a2v = arr2[i] || 0;
    summedArr.push(a1v + a2v);
  }
  console.log(summedArr);
  return summedArr;
};

export const sumEvenOddIndexes = (arr: number[], bool: boolean): number => {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (let i = bool ? 0 : 1; i < arr.length; i += 2) {
    sum += arr[i];
  }

  return sum;
};

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
