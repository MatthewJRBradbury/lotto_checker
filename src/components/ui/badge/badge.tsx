import { cn } from '@/lib/utils';
import { BadgeProps, badgeVariants } from './badgeVariants';

function Badge({ className, variant, ...props }: Readonly<BadgeProps>) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
