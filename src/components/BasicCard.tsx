import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BasicCardProps } from '@/types';

const BasicCard = ({ className, ...props }: BasicCardProps) => {
  return (
    <Card className={cn('sm:w-full', className)} {...props}>
      <CardHeader>
        <div className="flex w-full flex-col justify-between sm:flex-row">
          <div className="flex flex-col pb-2 sm:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <CardTitle className="mr-2 text-xl">{props.title}</CardTitle>
              {props?.titleTag}
            </div>
            <CardDescription>{props?.description}</CardDescription>
          </div>
          {props?.topRightComponent}
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 overflow-auto xxxxs:justify-items-center">
        {props.children}
      </CardContent>
    </Card>
  );
};

export default BasicCard;
