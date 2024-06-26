import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BasicSelectProps } from '@/types';

const BasicSelect = ({ className, ...props }: BasicSelectProps) => {
  return (
    <div className={className}>
      <Select value={props.value} onValueChange={props.onValueChange}>
        <SelectTrigger aria-label="Ticket draw date selector">
          <SelectValue placeholder={props?.placeholder ?? 'Select an option'}>
            {props.value}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {props?.options?.map((option) => (
            <SelectItem key={option.label} value={option.value}>
              <>
                {option.label}
                {option.icon && ' - '}
                {option?.icon}
              </>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BasicSelect;
