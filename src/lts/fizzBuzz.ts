export const fizzBuzz = (num: number): (number | string)[] => {
  const fizzedArr = [];
  for (let i = 1; i < num + 1; i++) {
    let result: string | number = i;

    if (i % 3 === 0) {
      result = 'Fizz';
    }
    if (i % 5 === 0) {
      if (!isNaN(Number(result))) {
        result = 'Buzz';
      } else {
        result += 'Buzz';
      }
    }
    fizzedArr.push(result);
  }
  return fizzedArr;
};
