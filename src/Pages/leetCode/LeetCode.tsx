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
import { rotateArray } from '@/lts/rotateArray';
import { maxStockProfit } from '@/lts/maxStockProfit';
import { maxStockProfit2 } from '@/lts/maxStockProfit2';
import { canJump } from '@/lts/jumpGame';
import { canJump2 } from '@/lts/jumpGame2';
import { hIndexShortHand } from '@/lts/hIndex';
import { productExceptSelfWithoutDivision } from '@/lts/productOfArrayExceptSelf';
import { canCompleteCircuit } from '@/lts/canCompleteCircuit';
import { minCandy } from '@/lts/minCandy';
import { trapWater } from '@/lts/trappingRainWater';
import { romanToInt } from '@/lts/romanToInteger';
import { intToRoman } from '@/lts/integerToRoman';
import { lengthOfLastWord } from '@/lts/lengthOfLastWord';
import { longestCommonPrefix } from '@/lts/longestCommonPrefix';
import { reverseWords } from '@/lts/reverseWordsInString';
import { strStr } from '@/lts/findIndexOfFirstWordsOccurence';

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
    constraints: [
      '1 <= s.length <= 1000',
      's consists of English letters (lower-case and upper-case), ","" and "."',
      '1 <= numRows <= 1000',
    ],
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
    fnResult: () => merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6]).toString(),
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
  {
    title: 'Rotate Array in place',
    desc: `Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.`,
    difficulty: difficulty.medium,
    input: 'nums = [1,2,3,4,5,6,7], k = 3',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => rotateArray([1, 2, 3, 4, 5, 6, 7], 3).toString(),
    fn: rotateArray,
  },
  {
    title: 'Best Time to Buy and Sell Stock',
    desc: `Given an array prices where prices[i] is the price of a given stock on the ith day. 
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in 
    the future to sell that stock. Return the maximum profit you can achieve from this transaction. 
    If you cannot achieve any profit, return 0.`,
    difficulty: difficulty.easy,
    input: '[7,1,5,3,6,4]',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => maxStockProfit([7, 1, 5, 3, 6, 4]).toString(),
    fn: maxStockProfit,
  },
  {
    title: 'Best Time to Buy and Sell Stock 2',
    desc: `Given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you 
    may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. 
    However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve.`,
    difficulty: difficulty.medium,
    input: '[7,1,5,3,6,4]',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => maxStockProfit2([7, 1, 5, 3, 6, 4]).toString(),
    fn: maxStockProfit2,
  },
  {
    title: 'Jump Game - can jump?',
    desc: `Given an integer array nums. You are initially positioned at the array's first index, 
    and each element in the array represents your maximum jump length at that position. 
    Return true if you can reach the last index, or false otherwise.`,
    difficulty: difficulty.medium,
    input: '[2,3,1,1,4]',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => canJump([2, 3, 1, 1, 4]).toString(),
    fn: canJump,
  },
  {
    title: 'Jump Game - Shortest path',
    desc: `Given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. 
    Each element nums[i] represents the maximum length of a forward jump from index i. 
    In other words, if you are at nums[i], you can jump to any nums[i + j]. 
    Return the minimum number of jumps to reach nums[n - 1]. 
    The test cases are generated such that you can reach nums[n - 1].`,
    difficulty: difficulty.medium,
    input: '[2,3,1,1,4]',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => canJump2([2, 3, 1, 1, 4]).toString(),
    fn: canJump2,
  },
  {
    title: 'H-Index',
    desc: `Given an array of integers citations where citations[i] is the number of citations a researcher 
    received for their ith paper, return the researcher's h-index. 
    According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such 
    that the given researcher has published at least h papers that have each been cited at least h times.`,
    difficulty: difficulty.medium,
    input: '[3,0,6,1,5]',
    timeComplexity: 'O(n log(n))',
    spaceComplexity: 'O(1)',
    fnResult: () => hIndexShortHand([3, 0, 6, 1, 5]).toString(),
    fn: hIndexShortHand,
  },
  {
    title: 'Product of Array Except Self',
    desc: `Given an integer array nums, return an array answer such 
    that answer[i] is equal to the product of all the 
    elements of nums except nums[i].`,
    algoLink: {
      link: 'https://www.geeksforgeeks.org/a-product-array-puzzle/',
      linkTitle: 'Solved with a combo of Prefix Sum & Suffix Sum Algorithms',
    },
    difficulty: difficulty.medium,
    input: '[1,2,3,4]',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    fnResult: () => productExceptSelfWithoutDivision([1, 2, 3, 4]).toString(),
    fn: productExceptSelfWithoutDivision,
  },
  {
    title: 'Gas Station - Can Complete Circuit',
    desc: `There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an 
    unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. 
    You begin the journey with an empty tank at one of the gas stations. Given two integer arrays gas and cost, return the starting 
    gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. 
    If there exists a solution, it is guaranteed to be unique`,
    difficulty: difficulty.medium,
    input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    fnResult: () =>
      canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]).toString(),
    fn: canCompleteCircuit,
  },
  {
    title: 'Min Candy',
    desc: `There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving 
    candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating 
    get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.`,
    difficulty: difficulty.hard,
    input: '[1,0,2]',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    fnResult: () => minCandy([1, 0, 2]).toString(),
    fn: minCandy,
  },
  {
    title: 'Trapping Rain Water - Elevation map',
    desc: `Given n non-negative integers representing an elevation map where the width of each bar is 1, 
    compute how much water it can trap after raining.`,
    difficulty: difficulty.hard,
    input: '[0,1,0,2,1,0,1,3,2,1,2,1]',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    fnResult: () => trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]).toString(),
    fn: trapWater,
  },
  {
    title: 'Roman to Integer',
    desc: `Given a roman numeral, convert it to an integer.`,
    difficulty: difficulty.easy,
    input: 'MCMXCIV',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    fnResult: () => romanToInt('MCMXCIV').toString(),
    fn: romanToInt,
  },
  {
    title: 'Integer to Roman',
    desc: `Given an integer, convert it to a Roman numeral.`,
    difficulty: difficulty.medium,
    input: 3749,
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    fnResult: () => intToRoman(3749).toString(),
    fn: intToRoman,
  },
  {
    title: 'Length of Last Word',
    desc: `Given a string s consisting of words and spaces, return the length of the last word in the string. 
    A word is a maximal substring consisting of non-space characters only.`,
    difficulty: difficulty.easy,
    input: '   fly me   to   the moon  ',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    constraints: [
      '1 <= s.length <= 104',
      's consists of only English letters and spaces " ".',
      'There will be at least one word in s.',
    ],
    fnResult: () => lengthOfLastWord('   fly me   to   the moon  ').toString(),
    fn: lengthOfLastWord,
  },
  {
    title: 'Longest Common Prefix',
    desc: `Find the longest common prefix string in all of an arrays strings. 
    If there is no common prefix, return an empty string "". 
    Solution provided works because once sorted it guarantees that the strings inbetween the first and last string will start with the same letters 
    IF a common prefix is shared by all strings to begin with!`,
    difficulty: difficulty.easy,
    input: ['flower', 'flow', 'flight'],
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(m) - m is the length of the longest common prefix',
    constraints: [
      '1 <= strs.length <= 200',
      '0 <= strs[i].length <= 200',
      'strs[i] consists of only lowercase English letters',
    ],
    fnResult: () =>
      longestCommonPrefix(['flower', 'flow', 'flight', 'right']).toString(),
    fn: longestCommonPrefix,
  },
  {
    title: 'Reverse Words in a string',
    desc: `Given an input string s, reverse the order of the words. 
    A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. 
    Return a string of the words in reverse order concatenated by a single space. 
    Note that s may contain leading or trailing spaces or multiple spaces between two words. 
    The returned string should only have a single space separating the words. Do not include any extra spaces.`,
    difficulty: difficulty.medium,
    input: 'a good   example',
    timeComplexity: 'O(n)',
    spaceComplexity:
      'O(n) - since solution creates new array of words so n = number of words',
    constraints: [
      '1 <= s.length <= 104',
      's contains English letters (upper-case and lower-case), digits, and spaces " "',
      'There is at least one word in s',
    ],
    fnResult: () => reverseWords('a good   example').toString(),
    fn: reverseWords,
  },
  {
    title: 'Find the Index of the First Occurrence in a String',
    desc: `Given two strings needle and haystack, return the index of the first 
    occurrence of needle in haystack, or -1 if needle is not part of haystack.`,
    difficulty: difficulty.easy,
    input: 'haystack = "sadbutsad", needle = "sad"',
    timeComplexity: 'O(N − M + 1)',
    spaceComplexity: 'O(1)',
    constraints: [
      '1 <= haystack.length, needle.length <= 104',
      'haystack and needle consist of only lowercase English characters.',
    ],
    fnResult: () => strStr('sadbutsad', 'sad').toString(),
    fn: strStr,
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
