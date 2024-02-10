import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import LeetCard from '@/components/leetCode/LeetCard';
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
];

const LeetCode = () => {
  const [filteredList, setFilteredList] = useState<any[]>(leets);

  const searchLeets = (input: string, list: typeof leets) => {
    const searchResult = fuzzySearch(input, list, 'title').result;
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
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredList.map((leet) => {
          return (
            <LeetCard
              key={leet.title}
              title={leet.title}
              description={leet.desc}
            >
              <LeetCardContent
                input={leet.input}
                func={leet.fnResult}
                funcAsString={`const ${leet.fn.name} = ${leet.fn.toString()}`}
              />
            </LeetCard>
          );
        })}
      </div>
    </div>
  );
};

export default LeetCode;
