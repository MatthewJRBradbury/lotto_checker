export const Header = ({
  className,
  heading,
}: {
  className?: string;
  heading: string;
}) => {
  return (
    <header className={className ?? ''}>
      <h1 className="text-4xl">{heading}</h1>
    </header>
  );
};
