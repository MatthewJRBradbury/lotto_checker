export const longestConsecutive = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let max = 0;

  for (const num of nums) {
    if (set.has(num + 1)) {
      // if current position in sets value + 1 exists we skip to next iteration of loop
      // we do this as we are seeking the largest value before a 'gap'
      // a gap example: [1,3,~,4,5,6,~]  gaps are denoted by '~' so the 2 gaps here are '2' and '7' as they don't exist in the set.
      continue;
    }
    // continues here if a 'gap' is found (gap between set nums or largest num inside the set)
    let counter = 1,
      current = num;

    // since we've found end of current consecutive sequence (by finding the 'gap')
    // we can now work our way backwards to find the 'count'
    while (set.has(--current)) {
      counter++;
    }
    // can now record the count if bigger than the current max count
    max = Math.max(counter, max);
  }

  return max;
};
