interface GameProps {
  keyValue?: string;
  numbers: number[];
  className?: string;
}

const Game: React.FC<GameProps> = ({ keyValue, numbers, ...rest }) => (
  <tr key={keyValue} {...rest}>
    <td className="w-1 p-4 text-center md:p-3">{keyValue}</td>
    <td className="p-4 md:p-3">
      <div className="flex items-center gap-3">
        {numbers.map((number) => (
          <div
            key={number}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-gray-50"
          >
            <span>
              <b>{number}</b>
            </span>
          </div>
        ))}
      </div>
    </td>
  </tr>
);

export default Game;
