export const canJump = (nums: number[]): boolean => {
  let lastJump = nums.length - 1;

  for (let i = lastJump - 1; i > 0; i--) {
    if (nums[i] >= lastJump - i) {
      lastJump = i;
    }
  }
  return nums[0] >= lastJump;
};
