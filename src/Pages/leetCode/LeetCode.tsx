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
    <div className="border">
      <p>-------------------------------</p>
      <p>Middle of Three Problem: [3, 5, 5], Answer: {middle(3, 5, 5)}</p>
      <p>-------------------------------</p>
      <p>
        Sum Even Odd Indexes Problem: [3, 5, 5, 3, 7], Even, Answer:{' '}
        {sumEvenOddIndexes([3, 5, 5, 3, 7], true)}
      </p>
      <p>-------------------------------</p>
      <p>
        Reverse String Problem: "backwards", Answer:{' '}
        {reverseString('backwards')}
      </p>
      <p>-------------------------------</p>
      <p>
        isPalindrome Problem: "hannah", Answer: {String(isPalindrome('hannah'))}
      </p>
      <p>-------------------------------</p>
      <p>
        split string at index Problem: "hannah", Answer:{' '}
        {splitStringAtIndex('hannah', 2)}
      </p>
      <p>-------------------------------</p>
      <p>
        remove extra spaces Problem: Answer:{' '}
        <pre>'{removeExtraSpaces(' my  name    is Bob! ')}'</pre>
      </p>
      <p>-------------------------------</p>
      <p>count words Problem: Answer: {countWords(' my  name    is Bob! ')}</p>
      <p>-------------------------------</p>
      <p>
        sum number arrays by index Problem: Answer:{' '}
        {sumArrByIndex([6, 3, 2], [3, 0, 0, 7, 5]).toString()}
      </p>
      <p>-------------------------------</p>
      <p>factorial Problem: Answer: {factorial(10)}</p>
      <p>-------------------------------</p>
      <p>
        sum of string digits Problem: Answer:{' '}
        {sumOfStringDigits('hello 123z --1')}
      </p>
      <p>-------------------------------</p>
      <p>reverse sentence Problem: Answer: {reverseSentence('hello to you')}</p>
      <p>-------------------------------</p>
      <p>fizzbuzz Problem: Answer: {fizzBuzz(5).toString()}</p>
      <p>-------------------------------</p>
      <p>
        first duplicate Problem: Answer:{' '}
        {firstDuplicate([3, 7, 10, 0, 3, 10]).toString()}
      </p>
      <p>-------------------------------</p>
      <p>
        remove duplicates Problem: Answer:{' '}
        {removeDuplicates([3, 7, 10, 3, 3, 10]).toString()}
      </p>
      <p>-------------------------------</p>
      <p>
        can form string with 2nd strings letters Problem: Answer:{' '}
        {canFormString(' zA b b a ', 'zbBaa').toString()}
      </p>
      <p>-------------------------------</p>
      <p>Fibonacci Problem: Answer: {fibonacci(5).toString()}</p>
      <p>-------------------------------</p>
      <p>
        Count char occurences Problem: Answer:{' '}
        {JSON.stringify(charOccurCount('abc'))}
      </p>
      <p>-------------------------------</p>
      <p>is power of three Problem: Answer: {isPowerOfThree(9).toString()}</p>
    </div>
  );
};

export default LeetCode;
