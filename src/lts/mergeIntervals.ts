export const mergeIntervals = (intervals: number[][]): number[][] => {
  const ans = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let current = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (current[1] < intervals[i][0]) {
      // No overlap - insert and increment current
      ans.push(current);
      current = intervals[i];
    } else {
      // Overlap - update current
      current[1] = Math.max(current[1], intervals[i][1]);
    }
  }

  ans.push(current);

  return ans;
};
