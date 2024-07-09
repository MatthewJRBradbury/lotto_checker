import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import BasicCard from '@/components/BasicCard';
import LeetCardContent from '@/components/leetCode/LeetCardContent';
import { canFormString } from '@/lts/canFormString';
import { charOccurCount } from '@/lts/charOccurCount';
import { countWords } from '@/lts/countWords';
import { factorial } from '@/lts/factorial';
import { fibonacci } from '@/lts/fibonacci';
import { firstDuplicate } from '@/lts/firstDuplicate';
import { fizzBuzz } from '@/lts/fizzBuzz';
import { isPalindrome } from '@/lts/isPalindrome';
import { isPowerOfThree } from '@/lts/isPowerOfThree';
import { middle } from '@/lts/middleOfThree';
import { removeDuplicates } from '@/lts/removeDuplicates';
import { removeExtraSpaces } from '@/lts/removeExtraSpaces';
import { reverseSentence } from '@/lts/reverseSentence';
import { reverseString } from '@/lts/reverseString';
import { splitStringAtIndex } from '@/lts/splitStringAtIndex';
import { sumArrByIndex } from '@/lts/sumArrByIndex';
import { sumEvenOddIndexes } from '@/lts/sumEvenOddIndexes';
import { sumOfStringDigits } from '@/lts/sumOfStringDigits';
import { fuzzySearch } from '@/utils/searchUtils';
import { useState } from 'react';
import { longestSubstrNoRepeatChars } from '@/lts/longestSubstrNoRepeatChars';
import { difficulty } from './leetConstants';
import { findMedianSortedArrays } from '@/lts/medianOfTwoSortedArrays';
import { longestPalindrome } from '@/lts/longestPalindromicSubstring';
import { zigzagconvert } from '@/lts/zigzagConversion';
import { reverseInteger } from '@/lts/reverseInteger';
import { merge } from '@/lts/mergeSortedArray';
import { removeElement } from '@/lts/removeElementInPlaceArray';
import { removeDupesInSortedNumericArrayFast } from '@/lts/removeDuplicatesInSortedNumericArray';
import { removeThirdDuplicatesInSortedNumericArray } from '@/lts/removeThirdDuplicatesInSortedNumericArray';
import { majorityElement } from '@/lts/majorityElement';

const leets = [
  {
    title: 'Middle of Three Problem',
    desc: (
      <span>
        Function that takes 3 <b>number</b> args and returns middle number
      </span>
    ),
    input: '3, 5, 5',
    fnResult: () => middle(3, 5, 5),
    fn: middle,
  },
  {
    title: 'Sum Even Odd Indexes Problem',
    desc: (
      <span>
        Function that takes an <b>array</b> of <b>numbers</b> and a{' '}
        <b>boolean</b> value as args. Returns sum of numbers positioned at even
        indexes if boolean is true and return sum of numbers positioned at odd
        indexes if false
      </span>
    ),
    input: '[3, 7, 2, 5, 10], isEven: true',
    fnResult: () => sumEvenOddIndexes([3, 7, 2, 5, 10], true),
    fn: sumEvenOddIndexes,
  },
  {
    title: 'Reverse String',
    desc: (
      <span>
        Function that takes a string and returns it with characters in reverse
        order
      </span>
    ),
    input: '"backwards"',
    fnResult: () => '"' + reverseString('backwards') + '"',
    fn: reverseString,
  },
  {
    title: 'Palindrome',
    desc: (
      <span>
        Function which checks if a string is a palindrome{' '}
        <i>(word that reads the same forwards and backwards)</i> and returns
        true or false
      </span>
    ),
    input: '"hannah"',
    fnResult: () => '"' + String(isPalindrome('hannah')) + '"',
    fn: isPalindrome,
  },
  {
    title: 'Split String',
    desc: (
      <span>
        Function that adds a space in a provided string at a given position
      </span>
    ),
    input: '"hannah"',
    fnResult: () => '"' + splitStringAtIndex('hannah', 2) + '"',
    fn: splitStringAtIndex,
  },
  {
    title: 'Remove Extra Spaces',
    desc: <span>Function which removes all extra spacing from a string</span>,
    input: <pre>{'"my  name    is Bob!"'}</pre>,
    fnResult: () => '"' + removeExtraSpaces(' my  name    is Bob! ') + '"',
    fn: removeExtraSpaces,
  },
  {
    title: 'Count Words',
    desc: 'Function that counts total number of words in a given string',
    input: <pre>"{'my  name    is Bob!'}"</pre>,
    fnResult: () => '"' + countWords(' my  name    is Bob! ') + '"',
    fn: countWords,
  },
  {
    title: 'Sum 2 Arrays by Index',
    desc: 'Function that sums 2 arrays by index order and returns answer as an array',
    input: '[6, 3, 2], [3, 0, 0, 7, 5]',
    fnResult: () =>
      '"' + sumArrByIndex([6, 3, 2], [3, 0, 0, 7, 5]).toString() + '"',
    fn: sumArrByIndex,
  },
  {
    title: 'Factorial',
    desc: 'Function that calculates the factorial of a given number',
    input: 10,
    fnResult: () => factorial(10),
    fn: factorial,
  },
  {
    title: 'Sum of Digits in a String',
    desc: 'Function that sums all digits in a string. Ignores negative numbers and returns -1 if no digits in string',
    input: 'hello 123z --1',
    fnResult: () => sumOfStringDigits('hello 123z --1'),
    fn: sumOfStringDigits,
  },
  {
    title: 'Reverse Sentence',
    desc: "Function that reverses the order of words in a given sentence. If there are 1 or less words instead returns 'Not enough words!'",
    input: 'hello to you',
    fnResult: () => '"' + reverseSentence('hello to you') + '"',
    fn: reverseSentence,
  },
  {
    title: 'FizzBuzz',
    desc: "Function that takes a number and returns an array consisting of numbers between 1 and given number. However returns 'Fizz' for numbers divisible by 3, 'Buzz' for numbers divisible by 5 and 'FizzBuzz' when both true",
    input: 5,
    fnResult: () => fizzBuzz(5).toString(),
    fn: fizzBuzz,
  },
  {
    title: 'First Duplicate Element',
    desc: 'Function that returns the first found duplicate element in a given array',
    input: '[3, 7, 10, 0, 3, 10]',
    fnResult: () => firstDuplicate([3, 7, 10, 0, 3, 10]).toString(),
    fn: firstDuplicate,
  },
  {
    title: 'Remove Duplicates',
    desc: 'Function that returns and array with all duplicates removed',
    input: [3, 7, 10, 3, 3, 10],
    fnResult: () => removeDuplicates([3, 7, 10, 3, 3, 10]).toString(),
    fn: removeDuplicates,
  },
  {
    title: 'Can Form String',
    desc: 'Function that takes two strings and checks if first string can have its characters rearranged to form the second string',
    input: '" zA b b a ", "zbBaa"',
    fnResult: () => canFormString(' zA b b a ', 'zbBaa').toString(),
    fn: canFormString,
  },
  {
    title: 'Fibonacci Series',
    desc: 'Function that takes a number and returns the fibonacci series as an array',
    input: 5,
    fnResult: () => fibonacci(5).toString(),
    fn: fibonacci,
  },
  {
    title: 'Count Character Occurences',
    desc: 'Function that counts how many times each character in a string occur',
    input: 'abc',
    fnResult: () => JSON.stringify(charOccurCount('abc')),
    fn: charOccurCount,
  },
  {
    title: 'Is Power of 3',
    desc: 'Function that checks if a given number is a power of 3',
    input: 9,
    fnResult: () => isPowerOfThree(9).toString(),
    fn: isPowerOfThree,
  },
  {
    title: 'Longest Substring without repeating characters',
    desc: `Algorithm that efficiently finds the length of the longest substring without repeating characters using two pointers (left and right) and a dictionary (count) to keep track of character counts. It iterates through the string once, making it a linear time complexity algorithm. (Sliding window implementation)`,
    difficulty: difficulty.medium,
    input: 'pwwkew',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => longestSubstrNoRepeatChars('pwwkew').toString(),
    fn: longestSubstrNoRepeatChars,
  },
  {
    title: 'Median of Two Sorted Arrays',
    desc: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.`,
    difficulty: difficulty.hard,
    input: '[1, 3], [4]',
    timeComplexity:
      'O(n log n) - Possible best with other solution = O(log (m+n))', // TODO: revisit this one!
    spaceComplexity: 'O(m + n)',
    fnResult: () => findMedianSortedArrays([1, 3], [4]).toString(),
    fn: findMedianSortedArrays,
  },
  {
    title: 'Longest Palindromic Substring',
    desc: `Given a string, return the longest palindromic substring. Example below is the "Expand Around Center" approach for finding the longest palindromic substring in a given string. This approach works by iterating through each character in the string and expanding around it to check for palindromes. It takes advantage of the fact that a palindrome can be centered around a single character (in the case of odd-length palindromes) or between two characters (in the case of even-length palindromes). By expanding from each character, it identifies the longest palindrome.`,
    difficulty: difficulty.medium,
    input: 'ac',
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(1)',
    fnResult: () => longestPalindrome('ac').toString(),
    fn: longestPalindrome,
  },
  {
    title: 'Zigzag Conversion',
    desc: `Given a string, expect the string to be split between X number of rows in a zigzag pattern so given 
    "PAYPALISHIRING" rows should result as follows row1: [P, A, H, N] , row2: [A, P, L, S, I, I, G] , row3: [Y, I, R].
    then return rows concatenated: "PAHNAPLSIIGYIR"`,
    difficulty: difficulty.medium,
    input: 'String: "PAYPALISHIRING" , Rows: 3',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    fnResult: () => zigzagconvert('PAYPALISHIRING', 3).toString(),
    fn: zigzagconvert,
  },
  {
    title: 'Reverse Integer',
    desc: `Given a signed 32-bit integer x, return x with its digits reversed. 
    If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.`,
    difficulty: difficulty.medium,
    input: -123,
    fnResult: () => reverseInteger(-123).toString(),
    fn: reverseInteger,
  },
  {
    title: 'Merge Sorted Array',
    desc: `Given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of 
    elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted 
    array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, 
    nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements 
    are set to 0 and should be ignored. nums2 has a length of n.`,
    difficulty: difficulty.easy,
    input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
    fnResult: () => merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3).toString(),
    fn: merge,
  },
  {
    title: 'Remove Element Array',
    desc: `Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
    The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.`,
    difficulty: difficulty.easy,
    input: 'nums = [0,1,2,2,3,0,4,2], val = 2',
    fnResult: () => removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2).toString(),
    fn: removeElement,
  },
  {
    title: 'Remove Duplicates in sorted numeric Array',
    desc: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such 
    that each unique element appears only once. The relative order of the elements should be kept the same. 
    Then return the number of unique elements in nums.`,
    difficulty: difficulty.easy,
    input: '[1, 1, 2, 2, 3, 4]',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () =>
      removeDupesInSortedNumericArrayFast([1, 1, 2, 2, 3, 4]).toString(),
    fn: removeDupesInSortedNumericArrayFast,
  },
  {
    title: 'Remove third Duplicates in sorted numeric Array',
    desc: `Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place 
    such that each unique element appears at most twice. The relative order of the elements should be kept the same.
    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the 
    first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of 
    nums should hold the final result. It does not matter what you leave beyond the first k elements. 
    Return k after placing the final result in the first k slots of nums.`,
    difficulty: difficulty.medium,
    input: '[1, 1, 2, 2, 2, 3, 4]',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () =>
      removeThirdDuplicatesInSortedNumericArray([
        1, 1, 2, 2, 2, 3, 4,
      ]).toString(),
    fn: removeThirdDuplicatesInSortedNumericArray,
  },
  {
    title: 'Majority Element - numeric',
    desc: `Given an array nums of size n, return the majority element. 
    The majority element is the element that appears more than ⌊n / 2⌋ times. 
    Is assumed that the majority element always exists in the array.`,
    algoLink: {
      link: 'https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm',
      linkTitle: 'Boyer Moore majority vote algorithm',
    },
    difficulty: difficulty.easy,
    input: '[3, 2, 3]',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => majorityElement([3, 2, 3]).toString(),
    fn: majorityElement,
  },
];

const LeetCode = () => {
  document.title = 'Leetcode - Lotto Checker';
  const [filteredList, setFilteredList] = useState<typeof leets>(leets);

  const searchLeets = (input: string, list: typeof leets) => {
    const searchResult = fuzzySearch(input, list, ['title']).result;
    setFilteredList(searchResult);
  };

  return (
    <div className="space-y-5">
      <div className="m-1 flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
        <Header heading="Leet Code Problems" />
        <Search
          searchFunc={searchLeets}
          list={leets}
          className="sm:w-full md:w-1/3"
          aria-label="Search leet code problems"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredList.map((leet) => {
          return (
            <BasicCard
              key={leet.title}
              title={leet.title}
              description={leet.desc}
            >
              <LeetCardContent
                input={leet.input}
                func={leet.fnResult}
                funcAsString={`const ${leet.fn.name} = ${leet.fn.toString()}`}
                timeComplexity={leet?.timeComplexity}
                spaceComplexity={leet?.spaceComplexity}
                difficulty={leet?.difficulty}
                algorithmLink={leet?.algoLink}
                constraints={leet?.constraints}
              />
            </BasicCard>
          );
        })}
      </div>
    </div>
  );
};

export default LeetCode;
