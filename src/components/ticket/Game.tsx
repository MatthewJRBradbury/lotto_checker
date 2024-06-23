import { cn } from '@/lib/utils';
import { DrawWinResult } from '@/types';

interface GameProps {
  keyValue?: string;
  numbers: number[];
  results: DrawWinResult | undefined;
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
      <div className="xs:gap-3 flex items-center gap-1">
        {numbers.map((number) => {
          let color = colorOpts.regular;
          if (results?.PrimaryNumbers.includes(number)) {
            color = colorOpts.primary;
          } else if (results?.SecondaryNumbers.includes(number)) {
            color = colorOpts.secondary;
          }
          return (
            <div
              key={number}
              className={cn(
                'xxs:h-12 xxs:w-12 flex h-7 w-7 items-center justify-center rounded-full text-gray-50',
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
