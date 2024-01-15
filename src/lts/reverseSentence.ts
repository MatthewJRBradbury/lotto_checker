export const reverseSentence = (str: string): string => {
  const rev = str.split(' ');
  if (!rev || rev.length <= 1) return 'Not enough words!';

  return rev.reverse().join(' ');
};
