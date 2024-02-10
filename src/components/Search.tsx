import { Input } from './ui/input';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Search = <T extends string | object>({
  className,
  searchFunc,
  list,
  key,
}: {
  className: string;
  searchFunc: (value: string, list: T[], key?: keyof T) => void;
  list: T[];
  key?: keyof T;
}) => {
  return (
    <div className={cn(className, 'relative flex items-center')}>
      <SearchIcon className="absolute left-2 top-1/2 h-4 w-5 -translate-y-1/2 transform" />
      <Input
        type="search"
        autoFocus
        className={'pl-8'}
        onChange={(e) => searchFunc(e.target.value, list, key)}
      />
    </div>
  );
};
