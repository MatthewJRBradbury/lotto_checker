import * as leetFuncs from '@/lts';

export enum difficulty {
  easy = 'Easy',
  medium = 'Medium',
  hard = 'Hard',
}

interface LeetCodeProblem<T = any> {
  title?: string;
  desc?: React.ReactNode;
  difficulty?: difficulty;
  minutesTaken?: number;
  input?: any;
  timeComplexity?: string;
  spaceComplexity?: string;
  constraints?: string[];
  fnResult?: () => T;
  fn?: string | ((...args: any[]) => any);
  algoLink?: {
    link: string;
    linkTitle: string;
  };
}

export const leets: LeetCodeProblem[] = [
  {
    title: 'Middle of Three Problem',
    desc: (
      <span>
        Function that takes 3 <b>number</b> args and returns middle number
      </span>
    ),
    input: '3, 5, 5',
    fnResult: () => leetFuncs.middle(3, 5, 5),
    fn: leetFuncs.middle,
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
    fnResult: () => leetFuncs.sumEvenOddIndexes([3, 7, 2, 5, 10], true),
    fn: leetFuncs.sumEvenOddIndexes,
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
    fnResult: () => '"' + leetFuncs.reverseString('backwards') + '"',
    fn: leetFuncs.reverseString,
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
    fnResult: () => '"' + String(leetFuncs.isPalindrome('hannah')) + '"',
    fn: leetFuncs.isPalindrome,
  },
  {
    title: 'Split String',
    desc: (
      <span>
        Function that adds a space in a provided string at a given position
      </span>
    ),
    input: '"hannah"',
    fnResult: () => '"' + leetFuncs.splitStringAtIndex('hannah', 2) + '"',
    fn: leetFuncs.splitStringAtIndex,
  },
  {
    title: 'Remove Extra Spaces',
    desc: <span>Function which removes all extra spacing from a string</span>,
    input: <pre>{'"my  name    is Bob!"'}</pre>,
    fnResult: () =>
      '"' + leetFuncs.removeExtraSpaces(' my  name    is Bob! ') + '"',
    fn: leetFuncs.removeExtraSpaces,
  },
  {
    title: 'Count Words',
    desc: 'Function that counts total number of words in a given string',
    input: <pre>"{'my  name    is Bob!'}"</pre>,
    fnResult: () => '"' + leetFuncs.countWords(' my  name    is Bob! ') + '"',
    fn: leetFuncs.countWords,
  },
  {
    title: 'Sum 2 Arrays by Index',
    desc: 'Function that sums 2 arrays by index order and returns answer as an array',
    input: '[6, 3, 2], [3, 0, 0, 7, 5]',
    fnResult: () =>
      '"' +
      leetFuncs.sumArrByIndex([6, 3, 2], [3, 0, 0, 7, 5]).toString() +
      '"',
    fn: leetFuncs.sumArrByIndex,
  },
  {
    title: 'Factorial',
    desc: 'Function that calculates the factorial of a given number',
    input: 10,
    fnResult: () => leetFuncs.factorial(10),
    fn: leetFuncs.factorial,
  },
  {
    title: 'Sum of Digits in a String',
    desc: 'Function that sums all digits in a string. Ignores negative numbers and returns -1 if no digits in string',
    input: 'hello 123z --1',
    fnResult: () => leetFuncs.sumOfStringDigits('hello 123z --1'),
    fn: leetFuncs.sumOfStringDigits,
  },
  {
    title: 'Reverse Sentence',
    desc: "Function that reverses the order of words in a given sentence. If there are 1 or less words instead returns 'Not enough words!'",
    input: 'hello to you',
    fnResult: () => '"' + leetFuncs.reverseSentence('hello to you') + '"',
    fn: leetFuncs.reverseSentence,
  },
  {
    title: 'FizzBuzz',
    desc: "Function that takes a number and returns an array consisting of numbers between 1 and given number. However returns 'Fizz' for numbers divisible by 3, 'Buzz' for numbers divisible by 5 and 'FizzBuzz' when both true",
    input: 5,
    fnResult: () => leetFuncs.fizzBuzz(5).toString(),
    fn: leetFuncs.fizzBuzz,
  },
  {
    title: 'First Duplicate Element',
    desc: 'Function that returns the first found duplicate element in a given array',
    input: '[3, 7, 10, 0, 3, 10]',
    fnResult: () => leetFuncs.firstDuplicate([3, 7, 10, 0, 3, 10]).toString(),
    fn: leetFuncs.firstDuplicate,
  },
  {
    title: 'Remove Duplicates',
    desc: 'Function that returns and array with all duplicates removed',
    input: [3, 7, 10, 3, 3, 10],
    fnResult: () => leetFuncs.removeDuplicates([3, 7, 10, 3, 3, 10]).toString(),
    fn: leetFuncs.removeDuplicates,
  },
  {
    title: 'Can Form String',
    desc: 'Function that takes two strings and checks if first string can have its characters rearranged to form the second string',
    input: '" zA b b a ", "zbBaa"',
    fnResult: () => leetFuncs.canFormString(' zA b b a ', 'zbBaa').toString(),
    fn: leetFuncs.canFormString,
  },
  {
    title: 'Fibonacci Series',
    desc: 'Function that takes a number and returns the fibonacci series as an array',
    input: 5,
    fnResult: () => leetFuncs.fibonacci(5).toString(),
    fn: leetFuncs.fibonacci,
  },
  {
    title: 'Count Character Occurences',
    desc: 'Function that counts how many times each character in a string occur',
    input: 'abc',
    fnResult: () => JSON.stringify(leetFuncs.charOccurCount('abc')),
    fn: leetFuncs.charOccurCount,
  },
  {
    title: 'Is Power of 3',
    desc: 'Function that checks if a given number is a power of 3',
    input: 9,
    fnResult: () => leetFuncs.isPowerOfThree(9).toString(),
    fn: leetFuncs.isPowerOfThree,
  },
  {
    title: 'Longest Substring without repeating characters',
    desc: `Algorithm that efficiently finds the length of the longest substring without repeating characters using two pointers (left and right) and a dictionary (count) to keep track of character counts. It iterates through the string once, making it a linear time complexity algorithm. (Sliding window implementation)`,
    difficulty: difficulty.medium,
    input: 'pwwkew',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces',
    ],
    fnResult: () => leetFuncs.longestSubstrNoRepeatChars('pwwkew').toString(),
    fn: leetFuncs.longestSubstrNoRepeatChars,
  },
  {
    title: 'Median of Two Sorted Arrays',
    desc: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.`,
    difficulty: difficulty.hard,
    input: '[1, 3], [4]',
    timeComplexity:
      'O(n log n) - Possible best with other solution = O(log (m+n))', // TODO: revisit this one!
    spaceComplexity: 'O(m + n)',
    fnResult: () => leetFuncs.findMedianSortedArrays([1, 3], [4]).toString(),
    fn: leetFuncs.findMedianSortedArrays,
  },
  {
    title: 'Longest Palindromic Substring',
    desc: `Given a string, return the longest palindromic substring. Example below is the "Expand Around Center" approach for finding the longest palindromic substring in a given string. This approach works by iterating through each character in the string and expanding around it to check for palindromes. It takes advantage of the fact that a palindrome can be centered around a single character (in the case of odd-length palindromes) or between two characters (in the case of even-length palindromes). By expanding from each character, it identifies the longest palindrome.`,
    difficulty: difficulty.medium,
    input: 'ac',
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(1)',
    fnResult: () => leetFuncs.longestPalindrome('ac').toString(),
    fn: leetFuncs.longestPalindrome,
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
    fnResult: () => leetFuncs.zigzagconvert('PAYPALISHIRING', 3).toString(),
    fn: leetFuncs.zigzagconvert,
  },
  {
    title: 'Reverse Integer',
    desc: `Given a signed 32-bit integer x, return x with its digits reversed. 
    If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.`,
    difficulty: difficulty.medium,
    input: -123,
    fnResult: () => leetFuncs.reverseInteger(-123).toString(),
    fn: leetFuncs.reverseInteger,
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
    fnResult: () =>
      leetFuncs.merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6]).toString(),
    fn: leetFuncs.merge,
  },
  {
    title: 'Remove Element Array',
    desc: `Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
    The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.`,
    difficulty: difficulty.easy,
    input: 'nums = [0,1,2,2,3,0,4,2], val = 2',
    fnResult: () =>
      leetFuncs.removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2).toString(),
    fn: leetFuncs.removeElement,
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
      leetFuncs
        .removeDupesInSortedNumericArrayFast([1, 1, 2, 2, 3, 4])
        .toString(),
    fn: leetFuncs.removeDupesInSortedNumericArrayFast,
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
      leetFuncs
        .removeThirdDuplicatesInSortedNumericArray([1, 1, 2, 2, 2, 3, 4])
        .toString(),
    fn: leetFuncs.removeThirdDuplicatesInSortedNumericArray,
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
    fnResult: () => leetFuncs.majorityElement([3, 2, 3]).toString(),
    fn: leetFuncs.majorityElement,
  },
  {
    title: 'Rotate Array in place',
    desc: `Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.`,
    difficulty: difficulty.medium,
    input: 'nums = [1,2,3,4,5,6,7], k = 3',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    fnResult: () => leetFuncs.rotateArray([1, 2, 3, 4, 5, 6, 7], 3).toString(),
    fn: leetFuncs.rotateArray,
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
    fnResult: () => leetFuncs.maxStockProfit([7, 1, 5, 3, 6, 4]).toString(),
    fn: leetFuncs.maxStockProfit,
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
    fnResult: () => leetFuncs.maxStockProfit2([7, 1, 5, 3, 6, 4]).toString(),
    fn: leetFuncs.maxStockProfit2,
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
    fnResult: () => leetFuncs.canJump([2, 3, 1, 1, 4]).toString(),
    fn: leetFuncs.canJump,
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
    fnResult: () => leetFuncs.canJump2([2, 3, 1, 1, 4]).toString(),
    fn: leetFuncs.canJump2,
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
    fnResult: () => leetFuncs.hIndexShortHand([3, 0, 6, 1, 5]).toString(),
    fn: leetFuncs.hIndexShortHand,
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
    fnResult: () =>
      leetFuncs.productExceptSelfWithoutDivision([1, 2, 3, 4]).toString(),
    fn: leetFuncs.productExceptSelfWithoutDivision,
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
      leetFuncs.canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]).toString(),
    fn: leetFuncs.canCompleteCircuit,
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
    fnResult: () => leetFuncs.minCandy([1, 0, 2]).toString(),
    fn: leetFuncs.minCandy,
  },
  {
    title: 'Trapping Rain Water - Elevation map',
    desc: `Given n non-negative integers representing an elevation map where the width of each bar is 1, 
    compute how much water it can trap after raining.`,
    difficulty: difficulty.hard,
    input: '[0,1,0,2,1,0,1,3,2,1,2,1]',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    fnResult: () =>
      leetFuncs.trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]).toString(),
    fn: leetFuncs.trapWater,
  },
  {
    title: 'Roman to Integer',
    desc: `Given a roman numeral, convert it to an integer.`,
    difficulty: difficulty.easy,
    input: 'MCMXCIV',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    fnResult: () => leetFuncs.romanToInt('MCMXCIV').toString(),
    fn: leetFuncs.romanToInt,
  },
  {
    title: 'Integer to Roman',
    desc: `Given an integer, convert it to a Roman numeral.`,
    difficulty: difficulty.medium,
    input: 3749,
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    fnResult: () => leetFuncs.intToRoman(3749).toString(),
    fn: leetFuncs.intToRoman,
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
    fnResult: () =>
      leetFuncs.lengthOfLastWord('   fly me   to   the moon  ').toString(),
    fn: leetFuncs.lengthOfLastWord,
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
      leetFuncs
        .longestCommonPrefix(['flower', 'flow', 'flight', 'right'])
        .toString(),
    fn: leetFuncs.longestCommonPrefix,
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
    fnResult: () => leetFuncs.reverseWords('a good   example').toString(),
    fn: leetFuncs.reverseWords,
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
    fnResult: () => leetFuncs.strStr('sadbutsad', 'sad').toString(),
    fn: leetFuncs.strStr,
  },
  {
    title: 'Text Justification',
    desc: `Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters 
    and is fully (left and right) justified. You should pack your words in a greedy approach; that is, pack as many words as you can in each line. 
    Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters. Extra spaces between words should be distributed 
    as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left 
    will be assigned more spaces than the slots on the right. For the last line of text, it should be left-justified, and no extra space 
    is inserted between words.`,
    difficulty: difficulty.hard,
    input: `words = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a",
    "computer.", "Art", "is", "everything", "else", "we", "do"], maxWidth = 20`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    constraints: [
      '1 <= words.length <= 300',
      '1 <= words[i].length <= 20',
      'words[i] consists of only English letters and symbols',
      '1 <= maxWidth <= 100',
      'words[i].length <= maxWidth',
    ],
    fnResult: () =>
      leetFuncs
        .fullJustify(
          [
            'Science',
            'is',
            'what',
            'we',
            'understand',
            'well',
            'enough',
            'to',
            'explain',
            'to',
            'a',
            'computer.',
            'Art',
            'is',
            'everything',
            'else',
            'we',
            'do',
          ],
          20
        )
        .toString(),
    fn: leetFuncs.fullJustify,
  },
  {
    title: 'Valid Palindrome',
    desc: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
    it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, 
    or false otherwise.`,
    difficulty: difficulty.easy,
    input: `A man, a plan, a canal: Panama`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= s.length <= 2 * 105',
      's consists only of printable ASCII characters',
    ],
    fnResult: () =>
      leetFuncs.isValidPalindrome('A man, a plan, a canal: Panama').toString(),
    fn: leetFuncs.isValidPalindrome,
  },
  {
    title: 'Is Subsequence',
    desc: `Given two strings s and t, return true if s is a subsequence of t, or false otherwise. A subsequence of a string is a new 
    string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative 
    positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).`,
    difficulty: difficulty.easy,
    input: `s = "abc", t = "ahbgdc"`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    constraints: [
      '0 <= s.length <= 100',
      '0 <= t.length <= 104',
      's and t consist only of lowercase English letters.',
    ],
    minutesTaken: 23,
    fnResult: () => leetFuncs.isSubsequence('abc', 'ahbgdc').toString(),
    fn: leetFuncs.isSubsequence,
  },
  {
    title: 'Two Sum II - Input Array is sorted',
    desc: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
    find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] 
    and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, 
    added by one as an integer array [index1, index2] of length 2.`,
    difficulty: difficulty.medium,
    input: `numbers = [2,7,11,15], target = 9`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    constraints: [
      '2 <= numbers.length <= 3 * 10^4',
      '-1000 <= numbers[i] <= 1000',
      'numbers is sorted in non-decreasing order',
      '-1000 <= target <= 1000',
      'The tests are generated such that there is exactly one solution',
    ],
    minutesTaken: 40,
    fnResult: () => leetFuncs.twoSum2([2, 7, 11, 15], 9).toString(),
    fn: leetFuncs.twoSum2,
  },
  {
    title: 'Container with Most water',
    desc: `Given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are 
    (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. 
    Return the maximum amount of water a container can store.`,
    difficulty: difficulty.medium,
    input: `[1, 8, 6, 2, 5, 4, 8, 3, 7]`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    constraints: [
      'n == height.length',
      '2 <= n <= 10^5',
      '0 <= height[i] <= 10^4',
    ],
    minutesTaken: 60,
    fnResult: () => leetFuncs.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]).toString(),
    fn: leetFuncs.maxArea,
  },
  {
    title: '3Sum',
    desc: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
    and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.`,
    difficulty: difficulty.medium,
    input: `[-1,0,1,2,-1,-4]`,
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(n)',
    constraints: ['3 <= nums.length <= 3000', '-10^5 <= nums[i] <= 10^5'],
    fnResult: () => leetFuncs.threeSum([-1, 0, 1, 2, -1, -4]).toString(),
    fn: leetFuncs.threeSum,
  },
  {
    title: 'Minimum Size Subarray Sum',
    desc: `Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray 
    whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.`,
    difficulty: difficulty.medium,
    input: `target = 7, nums = [2,3,1,2,4,3]`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    constraints: [
      '1 <= target <= 10^9',
      '1 <= nums.length <= 10^5',
      '1 <= nums[i] <= 10^4',
    ],
    fnResult: () => leetFuncs.minSubArrayLen(7, [2, 3, 1, 2, 4, 3]).toString(),
    fn: leetFuncs.minSubArrayLen,
  },
  {
    title: 'Substring with Concatenation of All Words',
    desc: `given a string s and an array of strings words. All the strings of words 
    are of the same length. A concatenated string is a string that exactly contains all 
    the strings of any permutation of words concatenated. For example, if 
    words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and 
    "efcdab" are all concatenated strings. "acdbef" is not a concatenated string 
    because it is not the concatenation of any permutation of words. Return an array of 
    the starting indices of all the concatenated substrings in s. You can return the 
    answer in any order.`,
    difficulty: difficulty.hard,
    input: `s = "barfoothefoobarman", words = ["foo","bar"]`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= s.length <= 10^4',
      '1 <= words.length <= 5000',
      '1 <= words[i].length <= 30',
      's and words[i] consist of lowercase English letters',
    ],
    fnResult: () =>
      leetFuncs
        .substrWithConcatOfAllWords('barfoothefoobarman', ['foo', 'bar'])
        .toString(),
    fn: leetFuncs.substrWithConcatOfAllWords,
  },
  {
    title: 'Minimum Window Substring',
    desc: `Given two strings s and t of lengths m and n respectively, return the minimum window 
    substring of s such that every character in t (including duplicates) is included in the window. 
    If there is no such substring, return the empty string "".`,
    difficulty: difficulty.hard,
    input: `s = "ADOBECODEBANC", t = "ABC"`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(m+n)',
    constraints: [
      'm == s.length',
      'n == t.length',
      '1 <= m, n <= 10^5',
      's and t consist of uppercase and lowercase English letters',
    ],
    fnResult: () => leetFuncs.minWindow('ADOBECODEBANC', 'ABC').toString(),
    fn: leetFuncs.minWindow,
  },
  {
    title: 'Valid Sudoku',
    desc: `Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    Each row must contain the digits 1-9 without repetition. Each column must contain the digits 1-9 without repetition. 
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition. 
    Note: A Sudoku board (partially filled) could be valid but is not necessarily solvable. 
    Only the filled cells need to be validated according to the mentioned rules.`,
    difficulty: difficulty.medium,
    minutesTaken: 93,
    input: `board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`,
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n)',
    constraints: [
      'board.length == 9',
      'board[i].length == 9',
      'board[i][j] is a digit 1-9 or "."',
    ],
    fnResult: () =>
      leetFuncs
        .isValidSudoku([
          ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
          ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
          ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
          ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
          ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
          ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
          ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
          ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ])
        .toString(),
    fn: leetFuncs.isValidSudoku,
  },
  {
    title: 'Spiral Matrix',
    desc: `Given an m x n matrix, return all elements of the matrix in spiral order.`,
    difficulty: difficulty.medium,
    minutesTaken: 76,
    input: `[[1,2,3],[4,5,6],[7,8,9]]`,
    timeComplexity: 'O(m*n)',
    spaceComplexity: 'O(1)',
    constraints: [
      'm == matrix.length',
      'n == matrix[i].length',
      '1 <= m, n <= 10',
      '-100 <= matrix[i][j] <= 100',
    ],
    fnResult: () =>
      leetFuncs
        .spiralOrder([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ])
        .toString(),
    fn: leetFuncs.spiralOrder,
  },
  {
    title: 'Rotate Image',
    desc: `Given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). 
    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
    DO NOT allocate another 2D matrix and do the rotation.`,
    difficulty: difficulty.medium,
    minutesTaken: 70,
    input: `[[1,2,3],[4,5,6],[7,8,9]]`,
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(1)',
    constraints: [
      'n == matrix.length == matrix[i].length',
      '1 <= n <= 20',
      '-1000 <= matrix[i][j] <= 1000',
    ],
    fnResult: () =>
      leetFuncs
        .rotateImage([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ])
        .toString(),
    fn: leetFuncs.rotateImage,
  },
  {
    title: 'Set Matrix Zeroes',
    desc: `Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.`,
    difficulty: difficulty.medium,
    minutesTaken: 8,
    input: `[[1,1,1],[1,0,1],[1,1,1]]`,
    timeComplexity: 'O(n * m)',
    spaceComplexity: 'O(n + m)',
    constraints: [
      'm == matrix.length',
      'n == matrix[0].length',
      '1 <= m, n <= 200',
      '-2^31 <= matrix[i][j] <= 2^31 - 1',
    ],
    fnResult: () =>
      leetFuncs
        .setZeroes([
          [1, 1, 1],
          [1, 0, 1],
          [1, 1, 1],
        ])
        .toString(),
    fn: leetFuncs.setZeroes,
  },
  {
    title: 'Game Of Life',
    desc: `The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
          Any live cell with fewer than two live neighbors dies as if caused by under-population.
          Any live cell with two or three live neighbors lives on to the next generation.
          Any live cell with more than three live neighbors dies, as if by over-population.
          Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
          The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.`,
    difficulty: difficulty.medium,
    minutesTaken: 45,
    input: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    timeComplexity: 'O(n ∗ m)',
    spaceComplexity: 'O(n ∗ m)',
    constraints: [
      'm == board.length',
      'n == board[i].length',
      '1 <= m, n <= 25',
      'board[i][j] is 0 or 1',
    ],
    fnResult: () =>
      leetFuncs
        .gameOfLife([
          [0, 1, 0],
          [0, 0, 1],
          [1, 1, 1],
          [0, 0, 0],
        ])
        .toString(),
    fn: leetFuncs.gameOfLife,
  },
  {
    title: 'Ransom Note',
    desc: `Given two strings ransomNote and magazine, 
    return true if ransomNote can be constructed by using the letters from magazine and false otherwise. 
    Each letter in magazine can only be used once in ransomNote.`,
    difficulty: difficulty.easy,
    minutesTaken: 27,
    input: 'ransomNote = "aa", magazine = "aab"',
    timeComplexity: 'O(n + m)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= ransomNote.length, magazine.length <= 10^5',
      'ransomNote and magazine consist of lowercase English letters',
    ],
    fnResult: () => leetFuncs.canConstruct('aa', 'aab').toString(),
    fn: leetFuncs.canConstruct,
  },
  {
    title: 'Isomorphic Strings',
    desc: `Given two strings s and t, determine if they are isomorphic. 
    Two strings s and t are isomorphic if the characters in s can be replaced to get t. 
    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.`,
    difficulty: difficulty.easy,
    minutesTaken: 40,
    input: 's = "foo", t = "bar"',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= s.length <= 5 * 10^4',
      't.length == s.length',
      's and t consist of any valid ascii character',
    ],
    fnResult: () =>
      leetFuncs.isIsomorphic_easierSolution('foo', 'bar').toString(),
    fn: leetFuncs.isIsomorphic_easierSolution,
  },
  {
    title: 'Word Pattern',
    desc: `Given a pattern and a string s, find if s follows the same pattern. 
    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.`,
    difficulty: difficulty.easy,
    minutesTaken: 24,
    input: 'pattern = "abba", s = "dog cat cat fish"',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= pattern.length <= 300',
      'pattern contains only lower-case English letters',
      '1 <= s.length <= 3000',
      's contains only lowercase English letters and spaces " "',
      's does not contain any leading or trailing spaces',
      'All the words in s are separated by a single space',
    ],
    fnResult: () =>
      leetFuncs.wordPattern('abba', 'dog cat cat fish').toString(),
    fn: leetFuncs.wordPattern,
  },
  {
    title: 'Valid Anagram',
    desc: `Given two strings s and t, return true if t is an anagram of s, and false otherwise. 
    An Anagram is a word or phrase formed by rearranging the letters of a different 
    word or phrase, typically using all the original letters exactly once.`,
    difficulty: difficulty.easy,
    minutesTaken: 5,
    input: 's = "anagram", t = "nagaram"',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= s.length, t.length <= 5 * 10^4',
      's and t consist of lowercase English letters',
    ],
    fnResult: () => leetFuncs.isAnagram_simple('anagram', 'nagaram').toString(),
    fn: leetFuncs.isAnagram_simple,
  },
  {
    title: 'Group Anagram',
    desc: `Given an array of strings strs, group the anagrams together. 
    You can return the answer in any order. An Anagram is a word or phrase 
    formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.`,
    difficulty: difficulty.medium,
    minutesTaken: 11,
    input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    timeComplexity: 'O(n ∗ m * log m)',
    spaceComplexity: 'O(n * m)',
    constraints: [
      '1 <= strs.length <= 10^4',
      '0 <= strs[i].length <= 100',
      'strs[i] consists of lowercase English letters',
    ],
    fnResult: () =>
      leetFuncs
        .groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
        .toString(),
    fn: leetFuncs.groupAnagrams,
  },
  {
    title: 'Two Sum',
    desc: `Given an array of integers nums and an integer target, return 
    indices of the two numbers such that they add up to target. 
    You may assume that each input would have exactly one solution, 
    and you may not use the same element twice. 
    You can return the answer in any order.`,
    difficulty: difficulty.easy,
    minutesTaken: 49,
    input: 'nums = [2,7,11,15], target = 9',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists',
    ],
    fnResult: () => leetFuncs.twoSum([2, 7, 11, 15], 9).toString(),
    fn: leetFuncs.twoSum,
  },
  {
    title: 'Happy Number',
    desc: `Write an algorithm to determine if a number n is happy. 
    A happy number is a number defined by the following process: 
    Starting with any positive integer, replace the number by the sum of the squares of its digits. 
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
    Those numbers for which this process ends in 1 are happy. 
    Return true if n is a happy number, and false if not.`,
    difficulty: difficulty.easy,
    minutesTaken: 10,
    input: 19,
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(log n)',
    constraints: ['1 <= n <= 2^31 - 1'],
    fnResult: () => leetFuncs.isHappyNumber(19).toString(),
    fn: leetFuncs.isHappyNumber,
  },
  {
    title: 'Contains Duplicate II',
    desc: `Given an integer array nums and an integer k, return true if 
    there are two distinct indices i and j in the array such that 
    nums[i] == nums[j] and abs(i - j) <= k.`,
    difficulty: difficulty.easy,
    minutesTaken: Infinity,
    input: 'nums = [1,2,3,1], k = 3',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '0 <= k <= 10^5',
    ],
    fnResult: () =>
      leetFuncs.containsNearbyDuplicate([1, 2, 3, 1], 3).toString(),
    fn: leetFuncs.containsNearbyDuplicate,
  },
  {
    title: 'Longest Consecutive Sequence',
    desc: `Given an unsorted array of integers nums, 
    return the length of the longest consecutive elements sequence. 
    You must write an algorithm that runs in O(n) time.`,
    difficulty: difficulty.medium,
    minutesTaken: Infinity,
    input: [100, 4, 200, 1, 3, 2],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: ['0 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    fnResult: () =>
      leetFuncs.longestConsecutive([100, 4, 200, 1, 3, 2]).toString(),
    fn: leetFuncs.longestConsecutive,
  },
  {
    title: 'Summary Ranges',
    desc: `Given a sorted unique integer array nums. 
    A range [a,b] is the set of all integers from a to b (inclusive). 
    Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums. 
    Each range [a,b] in the list should be output as: 
    ~ "a->b" if a != b 
    ~ "a" if a == b`,
    difficulty: difficulty.easy,
    minutesTaken: 14,
    input: [0, 1, 2, 4, 5, 7],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '0 <= nums.length <= 20',
      '-2^31 <= nums[i] <= 2^31 - 1',
      'All the values of nums are unique',
      'nums is sorted in ascending order',
    ],
    fnResult: () => leetFuncs.summaryRanges([0, 1, 2, 4, 5, 7]).toString(),
    fn: leetFuncs.summaryRanges,
  },
  {
    title: 'Merge Intervals',
    desc: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    difficulty: difficulty.medium,
    minutesTaken: Infinity,
    input: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      '0 <= starti <= endi <= 10^4',
    ],
    fnResult: () =>
      leetFuncs
        .mergeIntervals([
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ])
        .toString(),
    fn: leetFuncs.mergeIntervals,
  },
  {
    title: 'Insert Interval',
    desc: `Given an array of non-overlapping intervals intervals where 
    intervals[i] = [starti, endi] represent the start and the end of the ith 
    interval and intervals is sorted in ascending order by starti. You are also 
    given an interval newInterval = [start, end] that represents the start and end of 
    another interval. Insert newInterval into intervals such that intervals is still 
    sorted in ascending order by starti and intervals still does not have any overlapping 
    intervals (merge overlapping intervals if necessary). Return intervals after the insertion. 
    Note that you don't need to modify intervals in-place. You can make a new array and return it.`,
    difficulty: difficulty.medium,
    minutesTaken: Infinity,
    input: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '0 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      '0 <= starti <= endi <= 10^5',
      'intervals is sorted by starti in ascending order',
      'newInterval.length == 2',
      '0 <= start <= end <= 10^5',
    ],
    fnResult: () =>
      leetFuncs
        .insertInterval(
          [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
          ],
          [4, 8]
        )
        .toString(),
    fn: leetFuncs.insertInterval,
  },
  {
    title: 'Minimum Number of Arrows to Burst Balloons',
    desc: `There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons. 
    Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path. 
    Given the array points, return the minimum number of arrows that must be shot to burst all balloons.`,
    difficulty: difficulty.medium,
    minutesTaken: Infinity,
    input: [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ],
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    constraints: [
      '1 <= points.length <= 10^5',
      'points[i].length == 2',
      '-2^31 <= xstart < xend <= 2^31 - 1',
    ],
    fnResult: () =>
      leetFuncs
        .findMinArrowShots([
          [10, 16],
          [2, 8],
          [1, 6],
          [7, 12],
        ])
        .toString(),
    fn: leetFuncs.findMinArrowShots,
  },
  {
    title: 'Valid Parentheses',
    desc: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 
    An input string is valid if: 
    Open brackets must be closed by the same type of brackets. 
    Open brackets must be closed in the correct order. 
    Every close bracket has a corresponding open bracket of the same type.`,
    difficulty: difficulty.easy,
    minutesTaken: Infinity,
    input: '()[]{}',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only "()[]{}"',
    ],
    fnResult: () => leetFuncs.isValidParentheses('()[]{}').toString(),
    fn: leetFuncs.isValidParentheses,
  },
  {
    title: 'Simplify Path',
    desc: `Given an absolute path for a Unix-style file system, which begins with a slash '/', transform this path into its simplified canonical path. 
    In Unix-style file system context, a single period '.' signifies the current directory, a double period ".." denotes moving up one directory level, and multiple slashes such as "//" are interpreted as a single slash. In this problem, treat sequences of periods not covered by the previous rules (like "...") as valid names for files or directories. 
    The simplified canonical path should adhere to the following rules: 
    It must start with a single slash '/'. 
    Directories within the path should be separated by only one slash '/'. 
    It should not end with a slash '/', unless it's the root directory. 
    It should exclude any single or double periods used to denote current or parent directories.`,
    difficulty: difficulty.medium,
    minutesTaken: Infinity,
    input: '/.../a/../b/c/../d/./',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= s.length <= 3000',
      'path consists of English letters, digits, period ".", slash "/" or "_"',
      'path is a valid absolute Unix path',
    ],
    fnResult: () => leetFuncs.simplifyPath('/.../a/../b/c/../d/./'),
    fn: leetFuncs.simplifyPath,
  },
  {
    title: 'Min Stack',
    desc: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. 
    Implement the MinStack class: 
    MinStack() initializes the stack object. 
    void push(int val) pushes the element val onto the stack. 
    void pop() removes the element on the top of the stack. 
    int top() gets the top element of the stack. 
    int getMin() retrieves the minimum element in the stack. 
    You must implement a solution with O(1) time complexity for each function`,
    difficulty: difficulty.medium,
    minutesTaken: Infinity,
    input: `["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]`,
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    constraints: [
      '-2^31 <= val <= 2^31 - 1',
      'Methods pop, top and getMin operations will always be called on non-empty stacks',
      'At most 3 * 10^4 calls will be made to push, pop, top, and getMin',
    ],
    fnResult: () => leetFuncs.minStackCall(),
    fn: leetFuncs.minStackStrOfFunc,
  },
  {
    title: 'Evaluate Reverse Polish Notation',
    desc: `Given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. 
    Evaluate the expression. Return an integer that represents the value of the expression. 
    Note that: 
    The valid operators are '+', '-', '*', and '/'. 
    Each operand may be an integer or another expression. 
    The division between two integers always truncates toward zero. 
    There will not be any division by zero. 
    The input represents a valid arithmetic expression in a reverse polish notation. 
    The answer and all the intermediate calculations can be represented in a 32-bit integer.`,
    difficulty: difficulty.medium,
    minutesTaken: Infinity,
    input: [
      '10',
      '6',
      '9',
      '3',
      '+',
      '-11',
      '*',
      '/',
      '*',
      '17',
      '+',
      '5',
      '+',
    ],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    constraints: [
      '1 <= tokens.length <= 10^4',
      'tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200]',
    ],
    fnResult: () =>
      leetFuncs.evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ]),
    fn: leetFuncs.evalRPN,
  },
];
