export const numericArraysHaveSameContent = (
  arr1: number[],
  arr2: number[]
): boolean => {
  // validate lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Sort
  const sortedArr1 = [...arr1].sort((a, b) => a - b);
  const sortedArr2 = [...arr2].sort((a, b) => a - b);

  // Compare
  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  // arrays have same content
  return true;
};
