import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import BasicCard from '@/components/BasicCard';
import TicketContent from '../../components/ticket/TicketContent';
import { fuzzySearch } from '@/utils/searchUtils';
import { useState } from 'react';
import { Ticket } from '@/types';

// const results = [
//   // move elsewhere
//   {
//     type: 'Mon & Wed Lotto',
//     draw: 4363,
//     date: '07/02/2024',
//     winningNumbers: [11, 15, 23, 45, 14, 19],
//     supplementaryNumbers: [32, 4],
//   },
//   {
//     type: 'Mon & Wed Lotto',
//     draw: 4362,
//     date: '01/02/2024',
//     winningNumbers: [11, 15, 23, 45, 14, 19],
//     supplementaryNumbers: [32, 4],
//   },
// ];

// TODO: Replace with API request to backend (yet to create)
const tickets: Ticket[] = [
  {
    type: 'Mon & Wed Lotto',
    draw: 4363,
    games: {
      1: [1, 2, 3, 4, 5, 6],
      2: [15, 11, 23, 45, 32, 1],
      3: [15, 11, 23, 45, 32, 1],
    },
  },
  {
    type: 'Mon & Wed Lotto',
    draw: 4362,
    games: {
      1: [1, 2, 3, 4, 5, 6],
      2: [15, 11, 23, 45, 32, 1],
      3: [15, 11, 23, 45, 32, 1],
      4: [15, 11, 23, 45, 32, 1],
      5: [15, 11, 23, 45, 32, 1],
      6: [15, 11, 23, 45, 32, 1],
      7: [15, 11, 23, 45, 32, 1],
      8: [15, 11, 23, 45, 32, 1],
      9: [15, 11, 23, 45, 32, 1],
      10: [15, 11, 23, 45, 32, 1],
      11: [15, 11, 23, 45, 32, 1],
      12: [15, 11, 23, 45, 32, 1],
    },
  },
  {
    type: 'Saturday Lotto',
    draw: 5365,
    games: {
      1: [1, 2, 3, 4, 5, 6],
      2: [15, 11, 23, 45, 32, 1],
    },
  },
];

const Tickets = () => {
  const [filteredList, setFilteredList] = useState<Ticket[]>(tickets);

  const searchTickets = (input: string, list: Ticket[]) => {
    const searchResult = fuzzySearch<Ticket>(input, list, [
      'type',
      'draw',
    ]).result;
    setFilteredList(searchResult);
  };

  return (
    <div className="space-y-5">
      <div className="m-1 flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
        <Header heading="My Tickets" />
        <Search
          searchFunc={searchTickets}
          list={tickets}
          className="sm:w-full md:w-1/3"
          aria-label="Search 'My Tickets'"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredList.map((ticket) => {
          return (
            <BasicCard
              key={ticket.draw}
              title={`${ticket.type} Draw ${ticket.draw}`}
              className="relative"
            >
              <TicketContent games={ticket.games} />
            </BasicCard>
          );
        })}
      </div>
    </div>
  );
};

export default Tickets;
