export const longestSubstrNoRepeatChars = (text: string): number => {
  let maxLength: number = 0;
  let left: number = 0;
  const count: Record<string, number> = {};

  // left: marks start index of current substring
  // 'right' is the end index of current substring
  for (let right = 0; right < text.length; right++) {
    // 'curr' is the current end index ('right') character value.
    const curr = text[right];
    // increment char frequency +1 || initilize to 1
    count[curr] = (count[curr] || 0) + 1;

    /**
     * if the char that the main pointer is on has appeared more than once
     * decrement count of char at left pointer by 1
     * and start moving pointer from left to right by incrementing 'left' pointer.
     *
     * ^ Repeat until main pointers char count is not more than 1
     */
    while (count[curr] > 1) {
      count[text[left]] -= 1;
      left++;
    }

    /**
     * Either returns prev maxLength OR
     * main pointer minus left pointer incremented by 1
     * whichever is larger.
     *
     * This results in the largest non-repeating substring size.
     * End Result of 'count' freq: {"p": 0, "w": 1, "k": 1, "e": 1}
     */
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
