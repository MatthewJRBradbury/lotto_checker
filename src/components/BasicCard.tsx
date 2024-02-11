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
        <CardTitle className="text-xl">{props.title}</CardTitle>
        <CardDescription>{props?.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">{props.children}</CardContent>
    </Card>
  );
};

export default BasicCard;
