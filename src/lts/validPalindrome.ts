// O(n) runtime complexity
// O(n) storage
export const isValidPalindrome = (s: string): boolean => {
  const tmp = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const rev = tmp.split('').reverse().join('');
  return tmp === rev;
};

// ---------------------------------------------------------------------------

// O(n) runtime complexity
// O(1) storage
export const isPalindromeBestPerformance = (s: string): boolean => {
  function isAlphanumeric(char: string) {
    return (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z');
  }
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let iChar = s[i];
    let jChar = s[j];

    while (!isAlphanumeric(iChar)) {
      i++;
      if (i === j) return true;
      iChar = s[i];
    }
    while (!isAlphanumeric(jChar)) {
      j--;
      if (i === j) return true;
      jChar = s[j];
    }

    if (iChar !== jChar) return false;

    i++;
    j--;
  }

  return true;
};
