// Time complexity: O(n + m)
// Space complexity: O(n + m)
export const canConstruct_lessEfficient = (
  ransomNote: string,
  magazine: string
): boolean => {
  const charMap = new Map();
  const charMapMag = new Map();

  // map both str to respective hashmaps
  ransomNote.split('').forEach((char) => {
    charMap.has(char)
      ? charMap.set(char, charMap.get(char) + 1)
      : charMap.set(char, 1);
  });
  magazine.split('').forEach((char) => {
    charMapMag.has(char)
      ? charMapMag.set(char, charMapMag.get(char) + 1)
      : charMapMag.set(char, 1);
  });

  // check if each char exists in enough qty, if not return false
  for (const char of ransomNote) {
    if (!charMapMag.has(char) || charMap.get(char) > charMapMag.get(char)) {
      return false;
    }
  }
  return true;
};

// Time complexity: O(n + m)
// Space complexity: O(n)
export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const magazineChars = new Map<string, number>();

  for (const char of magazine) {
    if (magazineChars.has(char)) {
      magazineChars.set(char, magazineChars.get(char)! + 1);
    } else {
      magazineChars.set(char, 1);
    }
  }
  for (const char of ransomNote) {
    if (magazineChars.get(char)) {
      magazineChars.set(char, magazineChars.get(char)! - 1);
    } else {
      return false;
    }
  }
  return true;
};
