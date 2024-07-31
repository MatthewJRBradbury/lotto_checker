// Time complexity: O(n log n)
// Space complexity: O(n)
export const isAnagram_simple = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }
  return s.split('').sort().join('') === t.split('').sort().join('');
};
