export const isIsomorphic = (s: string, t: string): boolean => {
  const charMap = new Map();
  const visitedChars = new Set();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!charMap.has(sChar)) {
      if (visitedChars.has(tChar)) {
        return false; // Character in t has been used before for a different character in s
      }
      charMap.set(sChar, tChar); // Map sChar to tChar
      visitedChars.add(tChar); // Mark tChar as visited
    } else if (charMap.get(sChar) !== tChar) {
      return false; // Mapping does not match
    }
  }
  return true;
};

export const isIsomorphic_easierSolution = (s: string, t: string): boolean => {
  const mp1 = new Map(),
    alreadyMapped = new Set();

  for (let i = 0; i < s.length; i++) {
    // if there is no mapping of s[i] and t[i] is also not yet mapped to any previous character,
    // then create a mapping for s[i] and mark t[i] as "alreadyMapped"
    if (!mp1.has(s[i]) && !alreadyMapped.has(t[i])) {
      mp1.set(s[i], t[i]);
      alreadyMapped.add(t[i]);
    }
    // if mapping of s[i] does not exist OR the mapping of s[i] is not equal to t[i], then return false
    if (!mp1.has(s[i]) || mp1.get(s[i]) !== t[i]) {
      return false;
    }
  }
  return true;
};
