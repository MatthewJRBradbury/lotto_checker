export const canJump2 = (nums: number[]): number => {
  // set variable for jump count, max distance, and current position
  let jumps = 0;
  let maxDistance = 0;
  let curPos = 0;

  // loop through elements except for last.
  for (let i = 0; i < nums.length - 1; i++) {
    // greedy - set jumpable distance to whatever is larger, current
    // destination or current position plus jump
    maxDistance = Math.max(maxDistance, i + nums[i]);

    // if we're at the current position, increment jumps
    // the current position is the maxDistance.
    if (i === curPos) {
      jumps++;
      curPos = maxDistance;
    }
  }

  // return how many jumps.
  return jumps;
};
