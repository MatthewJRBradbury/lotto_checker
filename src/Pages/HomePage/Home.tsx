import { middle } from '@/leetcodes/middleOfThree';
import { sumEvenOddIndexes } from '@/leetcodes/sumEvenOddIndexes';

const Home = () => {
  return (
    <div className="border">
      <h1>Welcome to home page 🏡</h1>
      <p>-------------------------------</p>
      <p>Middle of Three Problem: [3, 5, 5], Answer: {middle(3, 7, 6)}</p>
      <p>-------------------------------</p>
      <p>
        Sum Even Odd Indexes Problem: [3, 5, 5, 3, 7], Even, Answer:{' '}
        {sumEvenOddIndexes([3, 5, 5, 3, 7], true)}
      </p>
      <p>-------------------------------</p>
    </div>
  );
};

export default Home;
