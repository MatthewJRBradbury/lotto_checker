import { TicketCardContentProps } from '@/types';
import Game from './Game';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Button } from '../ui/button';

const TicketContent = ({ games }: TicketCardContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const gameList = Object.entries(games);

  return (
    <div className="flex flex-col">
      <div className="w-full overflow-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="text-left text-sm font-semibold">
              <th className="p-4 md:p-3">Game</th>
              <th className="p-4 md:p-3">Numbers</th>
            </tr>
          </thead>
          <tbody className={isExpanded ? '' : 'max-h-[10rem] overflow-hidden'}>
            {gameList.map(([key, numbers], index) => (
              <Game
                key={key}
                keyValue={key}
                numbers={numbers}
                className={isExpanded || index < 3 ? 'table-row' : 'hidden'}
              />
            ))}
          </tbody>
        </table>
      </div>
      {gameList.length > 3 && (
        <Button
          variant="ghost"
          size="icon"
          className="z-10 self-center"
          aria-label="Expand ticket to view all games"
        >
          {isExpanded ? (
            <ChevronUpIcon
              className="z-10 h-10 w-10 transform self-center transition-transform duration-200 hover:-translate-y-1"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          ) : (
            <ChevronDownIcon
              className="z-10 h-10 w-10 transform self-center transition-transform duration-200 hover:translate-y-1"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          )}
        </Button>
      )}
      {!isExpanded && gameList.length > 3 && (
        <div className="backdrop-filter-blurry absolute inset-x-0 bottom-0 h-1/2 rounded-b-xl bg-gradient-overlay"></div>
      )}
    </div>
  );
};

export default TicketContent;