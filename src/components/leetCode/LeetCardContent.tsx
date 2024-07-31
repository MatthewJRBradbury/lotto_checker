import { LeetCardContentProps } from '@/types';
import { CopyBlock, tomorrowNightBright } from 'react-code-blocks';

const LeetCardContent = ({
  input,
  func,
  funcAsString,
  timeComplexity,
  spaceComplexity,
  difficulty,
  algorithmLink,
  constraints,
  minutesTaken,
}: LeetCardContentProps) => {
  /** TODO: - add expected output and actual output,
   * - dropdown with search for multiple solutions
   * - make input a dynamic field
   * - TODO : code not displaying correctly after build / deploy FIX this!
   * - TODO : Update difficulty to be a chip color coded for the difficulty
   * */
  return (
    <div className="w-full">
      {algorithmLink && (
        <div className="pb-1">
          <a className="hyperlink" href={algorithmLink.link}>
            {algorithmLink.linkTitle}
          </a>
        </div>
      )}
      {constraints && (
        <div className="pb-1">
          <h3>
            <b>Constraints:</b>
          </h3>
          <ul className="list-disc pl-4">
            {constraints.map((c: string) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}
      {difficulty && (
        <h3 className="pb-1">
          <b>Difficulty:</b> {difficulty}
        </h3>
      )}
      <h3 className="pb-1">
        <b>Input:</b> ({input})
      </h3>
      <h3 className="pb-1">
        <b>Output:</b> {func?.()}
      </h3>
      {timeComplexity && (
        <h3 className="pb-1">
          <b>Time Complexity:</b> {timeComplexity}
        </h3>
      )}
      {spaceComplexity && (
        <h3 className="pb-1">
          <b>Space Complexity:</b> {spaceComplexity}
        </h3>
      )}
      {minutesTaken && (
        <h3 className="pb-1">
          <b>Completed in:</b> {minutesTaken} minutes
        </h3>
      )}
      <h3>
        <b>Code:</b>
      </h3>
      <span className="overflow-auto">
        <CopyBlock
          text={funcAsString}
          language="JavaScript"
          showLineNumbers={false}
          theme={tomorrowNightBright}
          wrapLongLines={true}
          codeBlock
        />
      </span>
    </div>
  );
};

export default LeetCardContent;
