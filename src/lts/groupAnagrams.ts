// Time Complexity: O(n ∗ m * log m)
// Space Complexity: O(n * m)
export const groupAnagrams = (strs: string[]): string[][] => {
  const mapA = new Map();

  for (const element of strs) {
    const curr = element;
    const currOrdered = curr.split('').sort().join('');
    if (mapA.has(currOrdered)) {
      mapA.set(currOrdered, [...mapA.get(currOrdered), curr]);
    } else {
      mapA.set(currOrdered, [curr]);
    }
  }
  const ansArr: string[][] = [];
  mapA.forEach((om) => ansArr.push(om));
  return ansArr;
};
