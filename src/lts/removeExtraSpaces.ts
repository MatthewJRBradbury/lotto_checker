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
