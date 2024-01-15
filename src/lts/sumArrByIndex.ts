export const sumArrByIndex = (arr1: number[], arr2: number[]): number[] => {
  const summedArr = [];
  const len = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < len; i++) {
    const a1v = arr1[i] || 0;
    const a2v = arr2[i] || 0;
    summedArr.push(a1v + a2v);
  }
  console.log(summedArr);
  return summedArr;
};
