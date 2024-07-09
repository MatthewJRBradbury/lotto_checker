// O(log n)
export const intToRoman = (num: number): string => {
  let str = '';

  const roman = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];

  let i = 0;
  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);

    if (digit === 9) {
      str = roman[i][0] + roman[i + 1][0] + str;
    } else if (digit >= 5) {
      str = roman[i][1] + roman[i][0].repeat(digit - 5) + str;
    } else if (digit === 4) {
      str = roman[i][0] + roman[i][1] + str;
    } else {
      str = roman[i][0].repeat(digit) + str;
    }

    i++;
  }

  return str;
};

// O(1) , only works because size of input limited to 3999
export const intToRomanO1 = (num: number): string => {
  const rNums: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  for (const rN in rNums) {
    const count = num / rNums[rN];
    if (count > 0) {
      result += rN.repeat(count);
      num = num % rNums[rN];
    }
  }
  return result;
};
