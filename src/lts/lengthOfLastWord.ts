export const lengthOfLastWord = (s: string): number => {
  let wordLen = 0;

  if (s.length < 2) {
    return s.length;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      wordLen++;
    } else if (wordLen > 0) {
      return wordLen;
    }
  }
  return wordLen;
};
