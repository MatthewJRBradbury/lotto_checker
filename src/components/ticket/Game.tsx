import { cn } from '@/lib/utils';
import { DrawWinResult } from '@/types';
import { gamePrizeInfoIfWin } from '@/utils/lottoUtils';
import { Badge } from '../ui/badge/badge';

interface GameProps {
  keyValue?: string;
  numbers: number[];
  results: DrawWinResult | undefined;
  className?: string;
}

const colorOpts = {
  regular: 'bg-gray-200',
  primary: 'bg-purple-700',
  secondary: 'bg-blue-400',
};

const Game: React.FC<GameProps> = ({ keyValue, numbers, results, ...rest }) => {
  const gamePrize = gamePrizeInfoIfWin(numbers, results?.Wins);

  return (
    <tr key={keyValue} {...rest}>
      <td className="w-1 p-4 text-center md:p-3">{keyValue}</td>
      <td className="border-b p-4 text-center md:p-3">
        <div className="flex items-center gap-1 xs:gap-3">
          {numbers.map((number) => {
            let color = colorOpts.regular;
            let textColor = '';
            if (results?.PrimaryNumbers.includes(number)) {
              color = colorOpts.primary;
            } else if (results?.SecondaryNumbers.includes(number)) {
              color = colorOpts.secondary;
            } else {
              textColor = 'text-black';
            }
            return (
              <div
                key={number}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-full text-gray-50 xxs:h-12 xxs:w-12',
                  color,
                  textColor
                )}
              >
                <span>
                  <b>{number}</b>
                </span>
              </div>
            );
          })}
        </div>
        {gamePrize && (
          <Badge
            className="mt-2"
            variant="success"
          >{`$${gamePrize?.prize?.toFixed(2)} in Division ${gamePrize?.division} `}</Badge>
        )}
      </td>
    </tr>
  );
};

export default Game;
