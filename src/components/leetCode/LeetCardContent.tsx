import { LeetCardContentProps } from '@/types';
import { CopyBlock, tomorrowNightBright } from 'react-code-blocks';

const LeetCardContent = ({
  input,
  func,
  funcAsString,
}: LeetCardContentProps) => {
  /** TODO: add expected output and actual output, also make code section
   * have nav for multiple solutions */
  return (
    <>
      <h3>
        <b>Input:</b> ({input})
      </h3>
      <h3>
        <b>Output:</b> {func?.()}
      </h3>
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
    </>
  );
};

export default LeetCardContent;
