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
