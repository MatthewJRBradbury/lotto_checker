export const evalRPN = (tokens: string[]): number => {
  interface IOperatorSets {
    [key: string]: (a: number, b: number) => number;
  }
  const operatorSets: IOperatorSets = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => (a / b) | 0, // truncate toward zero
  };
  const stack: number[] = [];
  tokens.forEach((r) => {
    if (operatorSets[r]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operatorSets[r](a!, b!));
    } else {
      stack.push(Number(r));
    }
  });
  return stack.pop()!;
};
