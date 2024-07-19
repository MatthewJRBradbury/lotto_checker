export const twoSum2 = (numbers: number[], target: number): number[] => {
  let low: number = 0;
  let high: number = numbers.length - 1;

  while (low < high) {
    if (numbers[low] + numbers[high] > target) {
      high--;
    } else if (numbers[low] + numbers[high] < target) {
      low++;
    } else {
      return [low + 1, high + 1];
    }
  }
  return [];
};
