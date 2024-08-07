export const trapWater = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;

  let trappedWater = 0;
  let leftMaxHegith = 0;
  let rightMaxHegith = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMaxHegith) {
        leftMaxHegith = height[left];
      } else {
        trappedWater += leftMaxHegith - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMaxHegith) {
        rightMaxHegith = height[right];
      } else {
        trappedWater += rightMaxHegith - height[right];
      }
      right--;
    }
  }
  return trappedWater;
};
