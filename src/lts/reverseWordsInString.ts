export const reverseWords = (s: string): string => {
  return s.split(' ').filter(Boolean).reverse().join(' ');
};

export const reverseWordsLongWay = (s: string): string => {
  const stringAsArray = s.split(' ');
  let result = '';

  for (let i = stringAsArray.length - 1; i >= 0; i--) {
    // reverse
    const word = stringAsArray[i];

    if (word) {
      // filter
      result += word + ' '; // join
    }
  }

  return result.trim();
};
