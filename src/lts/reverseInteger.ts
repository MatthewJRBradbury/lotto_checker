export const reverseInteger = (x: number): number => {
  const minInt = -Math.pow(2, 31);
  const maxInt = -minInt - 1;

  const intStr = x.toString().split('');
  let isNegative = false;

  if (intStr[0] === '-') {
    intStr[0] = '';
    isNegative = true;
  }

  let ans = Number(intStr.reverse().join(''));

  if (isNegative) {
    ans = ans - ans * 2;
  }

  if (ans < minInt || ans > maxInt) {
    return 0;
  }

  return ans;
};
