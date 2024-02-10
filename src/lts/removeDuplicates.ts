export const removeDuplicates = (
  arr: (string | number)[]
): (string | number)[] => {
  return [...new Set(arr)];
};
