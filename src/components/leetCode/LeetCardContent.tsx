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
      <h4>
        <b>Input:</b> ({input})
      </h4>
      <h4>
        <b>Output:</b> {func?.()}
      </h4>
      <h4>
        <b>Code:</b>
      </h4>
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
