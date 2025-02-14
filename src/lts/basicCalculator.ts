export const calculate = (s: string): number => {
  const isDigit = (c: string) => c >= '0' && c <= '9';

  const stack: number[] = [];
  let sign: 1 | -1 = 1;
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let currC = s[i];

    if (isDigit(currC)) {
      // get the whole number by concat
      while (i + 1 < s.length && isDigit(s[i + 1])) {
        currC += s[++i];
      }
      sum += Number(currC) * sign;
    } else if (currC === '+') {
      sign = 1;
    } else if (currC === '-') {
      sign = -1;
    } else if (currC === '(') {
      stack.push(sum);
      stack.push(sign);
      sign = 1;
      sum = 0;
    } else if (currC === ')') {
      sum *= stack.pop() || 1;
      sum += stack.pop() || 0;
    }
  }

  return sum;
};
