export const zigzagconvert = (s: string, numRows: number): string => {
  const text = s;
  const rows: string[] = [];

  let currRow = 0;
  let moveForward = true;

  for (const element of text) {
    if (!rows[currRow]) {
      rows.push('');
    }
    rows[currRow] += element;
    console.log('Before inc: ' + currRow);
    if (!moveForward) {
      currRow = currRow - 1;
      if (currRow === 0) {
        moveForward = !moveForward;
      }
      console.log(currRow);
    } else {
      currRow = currRow + 1;
      if (currRow === numRows - 1) {
        moveForward = !moveForward;
      }
      console.log(currRow);
    }
  }
  return rows.join('');
};
