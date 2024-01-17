import LeetCard from '@/components/leetCode/LeetCard';
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

const LeetCode = () => {
  return (
    <div className="space-y-5">
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Middle of Three Problem"
          description={
            <span>
              Function that takes 3 <b>number</b> args and returns middle number
            </span>
          }
        >
          <p>
            <b>Input:</b> (3, 5, 5)
          </p>
          <p>
            <b>Output:</b> {middle(3, 5, 5)}
          </p>
        </LeetCard>
        <LeetCard
          title="Sum Even Odd Indexes Problem"
          description={
            <span>
              Function that takes an <b>array</b> of <b>numbers</b> and a{' '}
              <b>boolean</b> value as args. Returns sum of numbers positioned at
              even indexes if boolean is true and return sum of numbers
              positioned at odd indexes if false
            </span>
          }
        >
          <p>
            <b>Input:</b> ([3, 7, 2, 5, 10], isEven: true)
          </p>
          <p>
            <b>Output:</b> {sumEvenOddIndexes([3, 7, 2, 5, 10], true)}
          </p>
          <p>
            <b>Input:</b> ([3, 7, 2, 5, 10], isEven: false)
          </p>
          <p>
            <b>Output:</b> {sumEvenOddIndexes([3, 7, 2, 5, 10], false)}
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Reverse String"
          description={
            <span>
              Function that takes a string and returns it with characters in
              reverse order
            </span>
          }
        >
          <p>
            <b>Input:</b> ("backwards")
          </p>
          <p>
            <b>Output:</b> "{reverseString('backwards')}"
          </p>
        </LeetCard>
        <LeetCard
          title="Palindrome"
          description={
            <span>
              Function which checks if a string is a palindrome{' '}
              <i>(word that reads the same forwards and backwards)</i> and
              returns true or false
            </span>
          }
        >
          <p>
            <b>Input:</b> ("hannah")
          </p>
          <p>
            <b>Output:</b> {String(isPalindrome('hannah'))}
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Split String"
          description={
            <span>
              Function that adds a space in a provided string at a given
              position
            </span>
          }
        >
          <p>
            <b>Input:</b> ("hannah")
          </p>
          <p>
            <b>Output:</b> "{splitStringAtIndex('hannah', 2)}"
          </p>
        </LeetCard>
        <LeetCard
          title="Remove Extra Spaces"
          description={
            <span>Function which removes all extra spacing from a string</span>
          }
        >
          <p>
            <b>Input:</b> (<pre>{'"my  name    is Bob!"'}</pre>)
          </p>
          <p>
            <b>Output:</b>{' '}
            <pre>"{removeExtraSpaces(' my  name    is Bob! ')}"</pre>
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Count Words"
          description="Function that counts total number of words in a given string"
        >
          <p>
            <b>Input:</b> (<pre>"{'my  name    is Bob!'}"</pre>)
          </p>
          <p>
            <b>Output:</b> {countWords(' my  name    is Bob! ')}
          </p>
        </LeetCard>
        <LeetCard
          title="Sum 2 Arrays by Index"
          description="Function that sums 2 arrays by index order and returns answer as an array"
        >
          <p>
            <b>Input:</b> ([6, 3, 2], [3, 0, 0, 7, 5])
          </p>
          <p>
            <b>Output:</b>{' '}
            {sumArrByIndex([6, 3, 2], [3, 0, 0, 7, 5]).toString()}
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Factorial"
          description="Function that calculates the factorial of a given number"
        >
          <p>
            <b>Input:</b> (10)
          </p>
          <p>
            <b>Output:</b> {factorial(10)}
          </p>
        </LeetCard>
        <LeetCard
          title="Sum of Digits in a String"
          description="Function that sums all digits in a string. Ignores negative numbers and returns -1 if no digits in string"
        >
          <p>
            <b>Input:</b> ("hello 123z --1")
          </p>
          <p>
            <b>Output:</b> {sumOfStringDigits('hello 123z --1')}
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Reverse Sentence"
          description="Function that reverses the order of words in a given sentence. If there are 1 or less words instead returns 'Not enough words!'"
        >
          <p>
            <b>Input:</b> ("hello to you")
          </p>
          <p>
            <b>Output:</b> "{reverseSentence('hello to you')}"
          </p>
        </LeetCard>
        <LeetCard
          title="FizzBuzz"
          description="Function that takes a number and returns an array consisting of numbers between 1 and given number. However returns 'Fizz' for numbers divisible by 3, 'Buzz' for numbers divisible by 5 and 'FizzBuzz' when both true"
        >
          <p>
            <b>Input:</b> (5)
          </p>
          <p>
            <b>Output:</b> {fizzBuzz(5).toString()}
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="First Duplicate Element"
          description="Function that returns the first found duplicate element in a given array"
        >
          <p>
            <b>Input:</b> ([3, 7, 10, 0, 3, 10])
          </p>
          <p>
            <b>Output:</b> {firstDuplicate([3, 7, 10, 0, 3, 10]).toString()}
          </p>
        </LeetCard>
        <LeetCard
          title="Remove Duplicates"
          description="Function that returns and array with all duplicates removed"
        >
          <p>
            <b>Input:</b> ([3, 7, 10, 3, 3, 10])
          </p>
          <p>
            <b>Output:</b> {removeDuplicates([3, 7, 10, 3, 3, 10]).toString()}
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Can Form String"
          description="Function that takes two strings and checks if first string can have its characters rearranged to form the second string"
        >
          <p>
            <b>Input:</b> (" zA b b a ", "zbBaa")
          </p>
          <p>
            <b>Output:</b> {canFormString(' zA b b a ', 'zbBaa').toString()}
          </p>
        </LeetCard>
        <LeetCard
          title="Fibonacci Series"
          description="Function that takes a number and returns the fibonacci series as an array"
        >
          <p>
            <b>Input:</b> (5)
          </p>
          <p>
            <b>Output:</b> {fibonacci(5).toString()}
          </p>
        </LeetCard>
      </div>
      <div className="flex-col space-y-5 sm:space-x-0 md:flex md:flex-row md:space-x-5 md:space-y-0">
        <LeetCard
          title="Count Character Occurences"
          description="Function that counts how many times each character in a string occur"
        >
          <p>
            <b>Input:</b> ("abc")
          </p>
          <p>
            <b>Output:</b> {JSON.stringify(charOccurCount('abc'))}
          </p>
        </LeetCard>
        <LeetCard
          title="Is Power of 3"
          description="Function that checks if a given number is a power of 3"
        >
          <p>
            <b>Input:</b> (9)
          </p>
          <p>
            <b>Output:</b> {isPowerOfThree(9).toString()}
          </p>
        </LeetCard>
      </div>
    </div>
  );
};

export default LeetCode;
