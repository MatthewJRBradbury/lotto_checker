export const removeElement = (nums: number[], val: number): number => {
  const tmp = nums.filter((v) => v !== val);
  for (let i = 0; i < tmp.length; i++) {
    nums[i] = tmp[i];
  }
  return tmp.length;
};

export const removeElementBestPerformance = (
  nums: number[],
  val: number
): number => {
  if (nums.length === 0) {
    return 0;
  }

  let index = 0;
  let pos = 0;

  while (index !== nums.length) {
    if (nums[index] !== val) {
      nums[pos] = nums[index];
      pos += 1;
    }

    index += 1;
  }

  return pos;
};
