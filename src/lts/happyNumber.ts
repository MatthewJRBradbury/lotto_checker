// Time: O(log n)
// Space: O(log n)
export const isHappyNumber = (n: number): boolean => {
  let curr: number = n;
  const track = new Set();

  while (curr !== 1) {
    const nums: number[] = curr.toString().split('').map(Number);
    let tmp: number = 0;

    for (const num of nums) {
      tmp += num * num;
    }
    curr = tmp;
    if (track.has(curr)) {
      return false;
    } else {
      track.add(curr);
    }
  }
  return true;
};
