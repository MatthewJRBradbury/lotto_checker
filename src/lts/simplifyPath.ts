export const simplifyPath = (path: string): string => {
  const pathArr: string[] = path.split('/');
  const conicalPathArr: string[] = [];

  for (const dir of pathArr) {
    if (dir == '.' || dir == '') {
      continue;
    }
    if (dir == '..') {
      conicalPathArr.pop();
      continue;
    }
    conicalPathArr.push(dir);
  }

  return '/' + conicalPathArr.join('/');
};
