export const findMinArrowShots = (points: number[][]): number => {
  let len = points.length;
  points.sort((a, b) => a[0] - b[0]);
  let [, prevEnd] = points[0];
  for (let i = 1; i < points.length; i++) {
    const [currStart, currEnd] = points[i];
    if (prevEnd >= currStart) {
      len--;
      prevEnd = Math.min(currEnd, prevEnd);
    } else {
      prevEnd = currEnd;
    }
  }
  return len;
};
