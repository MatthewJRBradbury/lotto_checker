export const wordPattern = (pattern: string, s: string): boolean => {
  const mapWord = new Map();
  const visited = new Set();

  const strArr = s.split(' ');

  if (strArr.length !== pattern.length) {
    return false;
  }

  let currCharIndex = 0;

  for (const currStr of strArr) {
    const currChar = pattern[currCharIndex];

    // check that (word map doesn't have current string already) AND (Current Char from pattern hasn't been visited yet)
    if (!mapWord.has(currStr) && !visited.has(pattern[currCharIndex])) {
      // Then add both to Maps
      mapWord.set(currStr, currChar);
      visited.add(currChar);
    }
    // if (string isn't in current map at this point) OR
    // (the current strings mapped char value is not the same as the current char value ~~means its trying to remap the key pair~~)
    if (!mapWord.has(currStr) || mapWord.get(currStr) !== currChar) {
      return false;
    }

    // iterate curr char / reset if end of pattern reached
    if (currCharIndex === pattern.length - 1) {
      currCharIndex = 0;
    } else {
      currCharIndex++;
    }
  }
  return true;
};
