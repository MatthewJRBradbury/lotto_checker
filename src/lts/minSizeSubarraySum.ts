export const minSubArrayLen = (target: number, nums: number[]): number => {
  let currentLength = 0;
  // stagger pointers by 1
  let leftPointer = 0;
  let rightPointer = 1;

  let currSum = nums[leftPointer];

  // check if first index is already >= target
  if (currSum >= target) {
    return 1;
  }

  while (rightPointer < nums.length && leftPointer < nums.length - 1) {
    // each iteration check if the right pointer alone is >= target
    if (nums[rightPointer] >= target) {
      return 1;
    }
    // each iteration check if current total sum + right pointer is >= or less than target
    if (currSum + nums[rightPointer] < target) {
      // is less than target so add right pointer value to total sum and increment right pointer
      currSum += nums[rightPointer];
      rightPointer++;
    } else {
      // is greater or equal to target
      if (
        currentLength === 0 || // if length not set yet OR
        currentLength > rightPointer - leftPointer + 1 // if new length is less than current length
      ) {
        currentLength = rightPointer - leftPointer + 1; // update new current smallest subarray size
      }
      // remove left pointers value frum SUM and iterate left pointer.
      currSum -= nums[leftPointer];
      leftPointer++;
    }
  }

  return currentLength;
};
