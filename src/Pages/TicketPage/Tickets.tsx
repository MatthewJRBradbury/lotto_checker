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
  DrawWinResultRecord,
} from '@/types';
import TwoColumnGrid from '@/components/TwoColumnGrid';
import { fetchDrawData } from '@/API/theLottApis';
import { analyseDraw } from '@/utils/lottoUtils';
import BasicSelect from '@/components/BasicSelect';

// TODO: Replace with API request to backend (yet to create)
const tickets: FavoriteTicket[] = [
  {
    id: 't1',
    typeDisplayName: 'Mon, Wed & Friday Lotto',
    type: 'MondayWednesdayFridayLotto',
    name: 'MonFri',
    games: {
      1: [3, 12, 18, 27, 33, 43],
      2: [2, 20, 21, 24, 29, 42],
      3: [8, 15, 16, 30, 44, 45],
      4: [3, 6, 14, 24, 26, 33],
      5: [7, 12, 20, 28, 42, 45],
      6: [5, 10, 19, 33, 36, 43],
      7: [5, 8, 11, 25, 29, 41],
      8: [1, 11, 28, 29, 30, 38],
      9: [4, 18, 26, 41, 42, 45],
      10: [9, 14, 17, 25, 36, 39],
      11: [3, 6, 32, 34, 39, 43],
      12: [9, 21, 25, 26, 32, 34],
    },
  },
  {
    id: 't2',
    typeDisplayName: 'Saturday Lotto',
    type: 'TattsLotto',
    name: 'lucky numbers sat!',
    games: {
      1: [4, 5, 8, 10, 11, 22],
      2: [1, 2, 7, 14, 28, 33],
      3: [1, 3, 6, 9, 31, 43],
      4: [2, 16, 23, 31, 41, 43],
      5: [8, 15, 18, 21, 33, 40],
      6: [13, 20, 25, 33, 34, 43],
      7: [11, 16, 22, 27, 35, 38],
      8: [7, 9, 10, 24, 28, 36],
      9: [1, 11, 16, 22, 37, 40],
      10: [7, 11, 14, 22, 31, 39],
      11: [1, 7, 8, 11, 22, 40],
      12: [14, 17, 27, 28, 30, 44],
      13: [1, 19, 24, 36, 38, 41],
      14: [99, 17, 19, 24, 27, 28],
      15: [4, 7, 8, 9, 12, 39],
      16: [10, 20, 22, 24, 26, 33],
      17: [2, 6, 7, 19, 33, 39],
      18: [4, 11, 13, 27, 37, 43],
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
    MaxDrawCountPerProduct: 10,
    OptionalProductFilter: [...drawTypeSet],
  };
};

const Tickets = () => {
  document.title = 'Tickets - Lotto Checker';
  const [filteredList, setFilteredList] = useState<FavoriteTicket[]>(tickets);
  const [drawData, setDrawData] = useState<DrawResults | null>(null);
  const [drawReq] = useState<DrawDataRequest>(
    createDrawDataRequest(filteredList)
  );
  const [ticketResults, setTicketResults] =
    useState<Record<string, Record<string, DrawWinResultRecord | string>[]>>();
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
        const trs = Object.entries(result?.[ticket.id] || {})
          .reverse()
          .map(([key, DrawWinResult]: [string, DrawWinResult]) => ({
            label: DrawWinResult.label,
            value: {
              number: key,
              DrawWinResult: DrawWinResult,
            },
          }));
        setTicketResults((prev) => ({
          ...prev,
          [ticket.id]: trs,
        }));
        setTicketActiveDraws((prev) => ({
          ...prev,
          [ticket.id]: trs?.[0]?.value?.DrawWinResult,
        }));
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
              <BasicSelect // TODO : Highlight selected option inside of drop down when dropdown is opened
                key={ticket.id}
                className="w-fit"
                placeholder="Draw No."
                options={ticketResults?.[ticket.id]}
                onValueChange={(value: DrawWinResultRecord | string) => {
                  if (value && typeof value !== 'string') {
                    setTicketActiveDraws((prev) => ({
                      ...prev,
                      [ticket.id]: value?.DrawWinResult,
                    }));
                  }
                }}
                value={ticketActiveDraws?.[ticket.id]?.label ?? 'Draw No.'}
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
