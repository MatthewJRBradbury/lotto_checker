import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { generatePaginationLinks } from './genPageLinks';

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  showPreviousNext: boolean;
};
// TODO : update so mouse reverts to default for next and prev options at start/end of pages
// TODO : accessibility cant navigate with tab & cant activate with ENTER...
const Paginator = ({
  currentPage,
  totalPages,
  onPageChange,
  showPreviousNext,
}: PaginatorProps) => {
  return (
    <Pagination>
      <PaginationContent>
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <PaginationPrevious
              className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
              onClick={() =>
                onPageChange(currentPage > 1 ? currentPage - 1 : currentPage)
              }
            />
          </PaginationItem>
        ) : null}
        {generatePaginationLinks(currentPage, totalPages, onPageChange)}
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <PaginationNext
              className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}
              onClick={() =>
                onPageChange(
                  currentPage < totalPages ? currentPage + 1 : currentPage
                )
              }
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginator;
