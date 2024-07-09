export const minCandy = (ratings: number[]): number => {
  let res = 0;
  const n = ratings.length;
  const ltr = new Array(n).fill(1);
  const rtl = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ltr[i] = ltr[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rtl[i] = rtl[i + 1] + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    res += Math.max(ltr[i], rtl[i]);
  }
  return res;
};
