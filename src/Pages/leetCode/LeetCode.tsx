import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import BasicCard from '@/components/BasicCard';
import LeetCardContent from '@/components/leetCode/LeetCardContent';
import { fuzzySearch } from '@/utils/searchUtils';
import { useState } from 'react';
import Paginator from '@/components/Paginator/Paginator';
import { leets } from './leetConstants';

const LeetCode = () => {
  document.title = 'Leetcode - Lotto Checker';
  const [filteredList, setFilteredList] = useState<typeof leets>(leets);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageSize = 6;
  const numOfPages = Math.ceil(filteredList.length / pageSize);

  const searchLeets = (input: string, list: typeof leets) => {
    const searchResult = fuzzySearch(input, list, ['title']).result;
    setFilteredList(searchResult);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-5">
      <div className="m-1 flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
        <Header heading="Leet Code Problems" />
        <Search
          searchFunc={searchLeets}
          list={leets}
          className="sm:w-full md:w-1/3"
          aria-label="Search leet code problems"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredList
          .slice((currentPage - 1) * 6, currentPage * 6)
          .map((leet) => {
            return (
              <BasicCard
                key={leet.title}
                title={leet.title}
                description={leet.desc}
              >
                <LeetCardContent
                  input={leet.input}
                  func={leet.fnResult}
                  funcAsString={`const ${leet.fn.name} = ${leet.fn.toString()}`}
                  timeComplexity={leet?.timeComplexity}
                  spaceComplexity={leet?.spaceComplexity}
                  difficulty={leet?.difficulty}
                  algorithmLink={leet?.algoLink}
                  constraints={leet?.constraints}
                  minutesTaken={leet?.minutesTaken}
                />
              </BasicCard>
            );
          })}
      </div>
      <div>
        <Paginator
          currentPage={currentPage}
          totalPages={numOfPages}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          showPreviousNext
        />
      </div>
    </div>
  );
};

export default LeetCode;
