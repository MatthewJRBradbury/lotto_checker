import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import BasicCard from '@/components/BasicCard';
import TicketContent from '../../components/ticket/TicketContent';
import { fuzzySearch } from '@/utils/searchUtils';
import { useEffect, useMemo, useState } from 'react';
import {
  DrawDataRequest,
  DrawResults,
  DrawType,
  DrawWinResult,
  DrawWinResults,
  FavoriteTicket,
} from '@/types';
import TwoColumnGrid from '@/components/TwoColumnGrid';
import { fetchDrawData } from '@/API/theLottApis';
import { analyseDraw } from '@/utils/lottoUtils';
import BasicSelect from '@/components/BasicSelect';

// TODO: Replace with API request to backend (yet to create)
const tickets: FavoriteTicket[] = [
  {
    id: 't1',
    typeDisplayName: 'Mon & Wed Lotto',
    type: 'MonWedLotto',
    name: 'Bdays',
    games: {
      1: [1, 7, 3, 4, 5, 6],
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
    id: 't2',
    typeDisplayName: 'Mon & Wed Lotto',
    type: 'MonWedLotto',
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
    id: 't3',
    typeDisplayName: 'Saturday Lotto',
    type: 'MonWedLotto',
    name: 'lucky numbers monwed!',
    games: {
      1: [1, 2, 3, 4, 5, 6],
      2: [15, 11, 23, 45, 32, 1],
      3: [43, 35, 22, 45, 13, 31],
      4: [37, 30, 22, 24, 18, 31],
      5: [43, 35, 22, 45, 16, 31],
    },
  },
  {
    id: 't4',
    typeDisplayName: 'Saturday Lotto',
    type: 'TattsLotto',
    name: 'lucky numbers sat!',
    games: {
      1: [1, 2, 3, 4, 5, 6],
      2: [15, 11, 23, 45, 32, 1],
      3: [43, 35, 22, 45, 13, 31],
    },
  },
];

const createDrawDataRequest = (
  ticketList: FavoriteTicket[]
): DrawDataRequest => {
  const drawTypeSet = new Set(
    ticketList.map((t) => t.type)
  ) as unknown as DrawType[];

  return {
    CompanyId: 'Tattersalls',
    MaxDrawCountPerProduct: 2,
    OptionalProductFilter: [...drawTypeSet],
  };
};

const Tickets = () => {
  const [filteredList, setFilteredList] = useState<FavoriteTicket[]>(tickets);
  const [drawData, setDrawData] = useState<DrawResults | null>(null);
  const [drawReq, setDrawReq] = useState<DrawDataRequest>(
    createDrawDataRequest(filteredList)
  );
  const [ticketResults, setTicketResults] =
    useState<Record<string, DrawWinResults>>();
  const [ticketActiveDraws, setTicketActiveDraws] =
    useState<Record<string, DrawWinResult>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDrawData(await fetchDrawData(drawReq));
      } catch (err) {
        console.error('Failed to fetch draw data: ', err);
      }
    };
    fetchData();
  }, [drawReq]);

  useMemo(() => {
    if (drawData && tickets?.length > 0) {
      const result: Record<string, DrawWinResults> = {};
      for (const ticket of tickets) {
        const relevantDraws = drawData.DrawResults.filter(
          (d) => d.ProductId === ticket.type
        );
        if (relevantDraws?.length > 0) {
          result[ticket.id] = analyseDraw(
            ticket.type,
            relevantDraws,
            ticket.games
          );
        }
        setTicketResults(result);
      }
    }
  }, [drawData]);

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
            key={ticket.id}
            title={`${ticket.name}`}
            description={ticket.typeDisplayName}
            topRightComponent={
              <BasicSelect
                key={ticket.id}
                className="w-fit"
                placeholder="Draw No."
                options={Object.entries(ticketResults?.[ticket.id] || {})
                  .reverse()
                  .map(([key, DrawWinResult]: [string, DrawWinResult]) => ({
                    label: DrawWinResult.label,
                    value: {
                      number: key,
                      DrawWinResult: DrawWinResult,
                    },
                  }))}
                onValueChange={(value: DrawWinResult | string) => {
                  if (value && typeof value !== 'string') {
                    setTicketActiveDraws((prev) => ({
                      ...prev,
                      [ticket.id]: value,
                    }));
                  }
                }}
                value={
                  ticketActiveDraws?.[ticket.id]?.DrawWinResult?.label ||
                  'Draw No.'
                }
              />
            }
            className="relative"
          >
            <TicketContent
              games={ticket.games}
              ticketResult={ticketActiveDraws?.[ticket.id]}
            />
          </BasicCard>
        )}
        className="flex gap-6 sm:flex-col lg:flex-row"
      />
    </div>
  );
};

export default Tickets;
