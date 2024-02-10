export const canFormString = (str1: string, str2: string): boolean => {
  return (
    str1.toLowerCase().split('').sort().join('').trim() ===
    str2.toLowerCase().split('').sort().join('').trim()
  );
};
