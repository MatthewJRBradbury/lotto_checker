export const productExceptSelfWithoutDivision = (nums: number[]): number[] => {
  const res = [];
  let curr = 1;

  for (const element of nums) {
    res.push(curr);
    curr *= element;
  }
  curr = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= curr;
    curr *= nums[i];
  }
  return res;
}; // BEST Explanation video: https://www.youtube.com/watch?v=tSRFtR3pv74
/**
 *
 * essentially loops through from left of array, each indexes value = the multipication sum of everything to the left of index.
 * we then do the same thing for the right so we loop backwards from the right and each indexes value = multipication sum of everything to the right!
 *
 * finally we multiply the indexes in left and right result arrays to get the final answer array.
 *   - so finalAnswer[i] = (left[i] * right[i])
 */

// Easy:
export const productExceptSelfWithDivision = (nums: number[]): number[] => {
  const res = [];
  let curr = nums[0];

  for (const element of nums) {
    curr *= element;
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] = curr / nums[i];
  }
  return res;
};
