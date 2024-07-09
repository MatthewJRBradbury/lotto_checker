export const hIndexShortHand = (citations: number[]): number => {
  return citations.sort((a, b) => b - a).filter((x, i) => x > i).length;
};

export const hIndex = (citations: number[]): number => {
  const n: number = citations.length;

  citations.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) return n - i;
  }

  return 0;
};
