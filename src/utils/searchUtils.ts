export type SearchResult<T> = {
  matches: boolean;
  result: Array<T>;
};

export const fuzzySearch = <T>(
  input: string,
  list: T[],
  keys?: Array<keyof T>
): SearchResult<T> => {
  const lowerCaseInput = input.toLowerCase();
  const results: Array<T> = [];

  list.forEach((item) => {
    let concatenatedValue = '';
    if (keys) {
      keys.forEach((key) => {
        concatenatedValue += String(item[key]).toLowerCase() + ' ';
      });
    } else {
      // Fallback to the original behavior if no keys are provided
      concatenatedValue = String(item).toLowerCase();
    }

    const isMatch = concatenatedValue.includes(lowerCaseInput);
    if (isMatch) {
      results.push(item);
    }
  });

  return {
    matches: results.length > 0,
    result: results,
  };
};
