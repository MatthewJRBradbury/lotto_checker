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
