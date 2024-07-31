export const substrWithConcatOfAllWords = (
  s: string,
  words: string[]
): number[] => {
  const substrings = [];
  const stride = words[0].length;
  const concatRange = stride * words.length;

  // create map of words from array
  const dictionary: { [word: string]: number } = words.reduce(
    (dict: { [word: string]: number }, word) => {
      dict[word] = dict[word] ?? 0;
      ++dict[word];
      return dict;
    },
    {}
  );
  // Base case check if even possible given string length vs number of words and their length
  if (s.length < concatRange) return [];

  for (let i = 0; i < stride; i++) {
    let currDict: { [word: string]: number } = {};
    let left = i;
    let right = left;
    let matches = 0;
    while (right + stride <= s.length) {
      const currWord = s.substring(right, right + stride);
      right += stride;
      // console.log({ dictionary, currDict, currWord, left, right })

      if (dictionary[currWord] == null) {
        // unknown word
        currDict = {};
        left = right;
        matches = 0;
      } else {
        currDict[currWord] = currDict[currWord] ?? 0;
        ++currDict[currWord];
        ++matches;

        while (currDict[currWord] > dictionary[currWord]) {
          // too many duplicates
          const leftWord = s.substring(left, left + stride);
          currDict[leftWord] = --currDict[leftWord];
          matches--;
          left += stride;
        }

        if (matches === words.length) {
          substrings.push(left);
        }
      }
    }
  }

  return substrings;
};
