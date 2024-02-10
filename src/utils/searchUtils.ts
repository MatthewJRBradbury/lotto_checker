export type SearchResult = {
  matches: boolean;
  result: Array<string | object>;
};

export const fuzzySearch = <T extends string | object>(
  input: string,
  list: T[],
  key?: keyof T
): SearchResult => {
  const lowerCaseInput = input.toLowerCase();
  const results: Array<string | object> = [];

  list.forEach((item) => {
    let valueToSearch: string;
    if (typeof item === 'object' && key) {
      valueToSearch = String(item[key]).toLowerCase();
    } else if (typeof item === 'string') {
      valueToSearch = item.toLowerCase();
    } else {
      throw new Error('Invalid item type or key.');
    }

    if (valueToSearch.includes(lowerCaseInput)) {
      results.push(item);
    }
  });

  return {
    matches: results.length > 0,
    result: results,
  };
};
