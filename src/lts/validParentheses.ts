export const isValidParentheses = (s: string): boolean => {
  if (s.length % 2 !== 0) {
    return false;
  }

  const bracketsMap: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const openBracketsStack = [];
  const closeBrackets = Object.values(bracketsMap);

  for (const char of s) {
    const currentBracket = char;

    if (closeBrackets.includes(currentBracket)) {
      openBracketsStack.push(currentBracket);
    } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
      return false;
    }
  }
  return !openBracketsStack.length;
};
