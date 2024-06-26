import { globalConfig } from '@/config/config';
import { cn } from '@/lib/utils';

export function SiteFooter({
  className,
}: Readonly<React.HTMLAttributes<HTMLElement>>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex h-24 flex-col items-center justify-between gap-4 py-10">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            {globalConfig.footerContent}
          </p>
        </div>
      </div>
    </footer>
  );
}
