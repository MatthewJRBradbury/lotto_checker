export const removeThirdDuplicatesInSortedNumericArray = (
  nums: number[]
): number => {
  let k: number = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};
