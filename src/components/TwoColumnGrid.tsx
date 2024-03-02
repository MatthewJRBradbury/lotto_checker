import { JSX } from 'react/jsx-runtime';

interface TwoColumnGridProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  className?: string;
}

const TwoColumnGrid = <T,>({
  items,
  renderItem,
  className,
}: TwoColumnGridProps<T>) => {
  // Calculate the number of items to display in each column
  const itemsPerColumn = Math.ceil(items.length / 2);

  // Split the items into two arrays for rendering in two columns
  const firstColumnItems = items.slice(0, itemsPerColumn);
  const secondColumnItems = items.slice(itemsPerColumn);

  return (
    <div className={`flex gap-6 sm:flex-col lg:flex-row ${className}`}>
      <div className={`flex flex-col gap-6 lg:w-1/2`}>
        {firstColumnItems.map((item) => renderItem(item))}
      </div>
      <div className={`flex flex-col gap-6 lg:w-1/2`}>
        {secondColumnItems.map((item) => renderItem(item))}
      </div>
    </div>
  );
};

export default TwoColumnGrid;
