export const romanToInt = (s: string): number => {
  // if smaller roman numeral is before larger then minus it instead of addition
  const roman: { [num: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total: number = 0;
  let index = 0;

  while (index < s.length) {
    const currSymb = roman[s[index]];

    if (index !== s.length - 1) {
      const nextSymb = roman[s[index + 1]];
      if (currSymb < nextSymb) {
        total += nextSymb - currSymb;
        index += 2;
      } else {
        total += currSymb;
        index += 1;
      }
    } else {
      total += currSymb;
      index += 1;
    }
  }
  return total;
};
