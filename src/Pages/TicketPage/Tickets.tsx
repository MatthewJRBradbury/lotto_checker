import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import BasicCard from '@/components/BasicCard';
import TicketContent from '../../components/ticket/TicketContent';
import { fuzzySearch } from '@/utils/searchUtils';
import { useState } from 'react';
import { FavoriteTicket } from '@/types';
import TwoColumnGrid from '@/components/TwoColumnGrid';

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
const tickets: FavoriteTicket[] = [
  {
    type: 'Mon & Wed Lotto',
    name: 'Bdays',
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
    type: 'Mon & Wed Lotto',
    name: 'My Personal fav',
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
    name: 'lucky numbers!',
    games: {
      1: [1, 2, 3, 4, 5, 6],
      2: [15, 11, 23, 45, 32, 1],
    },
  },
];

const Tickets = () => {
  const [filteredList, setFilteredList] = useState<FavoriteTicket[]>(tickets);

  const searchTickets = (input: string, list: FavoriteTicket[]) => {
    const searchResult = fuzzySearch<FavoriteTicket>(input, list, [
      'type',
      'name',
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
      <TwoColumnGrid
        items={filteredList}
        renderItem={(ticket) => (
          <BasicCard
            key={ticket.name}
            title={`${ticket.name}`}
            description={ticket.type}
            className="relative"
          >
            <TicketContent games={ticket.games} />
          </BasicCard>
        )}
        className="flex gap-6 sm:flex-col lg:flex-row"
      />
    </div>
  );
};

export default Tickets;
