export const removeDuplicatesInSortedNumericArray = (
  nums: number[]
): number => {
  const unique = [...new Set(nums)];

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
};

export const removeDuplicatesNOTINPLACE = (nums: number[]): number => {
  return [...new Set(nums)].length;
};

export const removeDupesInSortedNumericArrayFast = (nums: number[]): number => {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
