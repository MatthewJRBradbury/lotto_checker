import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types';
import { ReactNode } from 'react';

type LeetCardProps = CardProps & {
  description: ReactNode;
};

const LeetCard = ({ className, ...props }: LeetCardProps) => {
  return (
    <Card className={cn('sm:w-full', className)} {...props}>
      <CardHeader>
        <CardTitle className="text-xl">{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">{props.children}</CardContent>
    </Card>
  );
};

export default LeetCard;
