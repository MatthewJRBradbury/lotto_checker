export function firstDuplicate(arr: number[]): number {
  const set = new Set();
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }

  return duplicates[0];
}
