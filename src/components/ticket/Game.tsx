import { cn } from '@/lib/utils';
import { DrawWinResults } from '@/types';

interface GameProps {
  keyValue?: string;
  numbers: number[];
  results: DrawWinResults | undefined;
  className?: string;
}

const colorOpts = {
  regular: 'bg-purple-600',
  primary: 'bg-green-700',
  secondary: 'bg-blue-400',
};

const Game: React.FC<GameProps> = ({ keyValue, numbers, results, ...rest }) => (
  <tr key={keyValue} {...rest}>
    <td className="w-1 p-4 text-center md:p-3">{keyValue}</td>
    <td className="p-4 md:p-3">
      <div className="flex items-center gap-3">
        {numbers.map((number) => {
          let color = colorOpts.regular;
          if (results?.DrawWinResult?.PrimaryNumbers.includes(number)) {
            color = colorOpts.primary;
          } else if (
            results?.DrawWinResult?.SecondaryNumbers.includes(number)
          ) {
            color = colorOpts.secondary;
          }
          return (
            <div
              key={number}
              className={cn(
                'flex h-7 w-7 items-center justify-center rounded-full text-gray-50 sm:h-12 sm:w-12',
                color
              )}
            >
              <span>
                <b>{number}</b>
              </span>
            </div>
          );
        })}
      </div>
    </td>
  </tr>
);

export default Game;
