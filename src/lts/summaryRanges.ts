export const summaryRanges = (nums: number[]): string[] => {
  let start = nums[0];
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];

    if (curr + 1 !== next || i === nums.length) {
      if (start === curr) {
        ans.push(`${curr}`);
      } else {
        ans.push(`${start}->${curr}`);
      }
      if (i !== nums.length) {
        start = next;
      }
    }
  }
  return ans;
};
