export const longestPalindrome = (text: string): string => {
  function expandAroundCenter(left: number, right: number): string {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      left--;
      right++;
    }
    return text.substring(left + 1, right);
  }

  let longest = '';

  for (let i = 0; i < text.length; i++) {
    const odd = expandAroundCenter(i, i);
    const even = expandAroundCenter(i, i + 1);

    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
};
/**
 * "Expand Around Center" approach:
 *
 * This approach works by iterating through each character in the
 * string and expanding around it to check for palindromes.
 * It takes advantage of the fact that a palindrome can be centered around a
 * single character (in the case of odd-length palindromes) or between two characters
 * (in the case of even-length palindromes).
 * By expanding from each character, it identifies the longest palindrome.
 */
