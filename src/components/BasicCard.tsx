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
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-col">
            <CardTitle className="text-xl">{props.title}</CardTitle>
            <CardDescription>{props?.description}</CardDescription>
          </div>
          {props?.topRightComponent}
        </div>
      </CardHeader>
      <CardContent className="grid justify-center gap-4">
        {props.children}
      </CardContent>
    </Card>
  );
};

export default BasicCard;
