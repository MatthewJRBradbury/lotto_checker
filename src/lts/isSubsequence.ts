export const isSubsequence = (s: string, t: string): boolean => {
  if (s === t) {
    return true;
  }
  if (s.length > t.length) {
    return false;
  }

  let sp = 0;
  for (const element of t) {
    if (s[sp] === element) {
      sp++;
    }
  }
  return sp === s.length;
};
