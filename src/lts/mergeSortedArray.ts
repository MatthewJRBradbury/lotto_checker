/**
Do not return anything, modify nums1 in-place instead.
*/
export const merge = (
  nums1: number[],
  m: number,
  nums2: number[]
): number[] => {
  const temp2 = [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b);

  for (let i = 0; i < temp2.length; i++) {
    nums1[i] = temp2[i];
  }

  return nums1;
};

// Simple better alternative:
export const mergeSimple = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] => {
  // loop joins arrays overwriting nums1s '0' vals
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  // sort is the same
  return nums1.sort((a, b) => a - b);
};
