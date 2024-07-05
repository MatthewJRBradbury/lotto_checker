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
        <a className="hyperlink" href={algorithmLink.link}>
          {algorithmLink.linkTitle}
        </a>
      )}
      {difficulty && (
        <h3>
          <b>Difficulty:</b> {difficulty}
        </h3>
      )}
      <h3>
        <b>Input:</b> ({input})
      </h3>
      <h3>
        <b>Output:</b> {func?.()}
      </h3>
      {timeComplexity && (
        <h3>
          <b>Time Complexity:</b> {timeComplexity}
        </h3>
      )}
      {spaceComplexity && (
        <h3>
          <b>Space Complexity:</b> {spaceComplexity}
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
