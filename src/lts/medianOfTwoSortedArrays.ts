export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[]
): number => {
  const sorted = nums1.concat(nums2).sort((n1, n2) => n1 - n2);

  if (sorted.length % 2 === 1) {
    return sorted[Math.ceil(sorted.length - 1) / 2];
  } else {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  }
};
