import { Card } from '@/components/ui/card';
import { ComponentProps, ReactNode } from 'react';

export type NavItem = {
  title: string;
  to: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type MainNavConfig = {
  mainNav: MainNavItem[];
};

export type CardProps = ComponentProps<typeof Card>;

export type BasicCardProps = CardProps & {
  description?: ReactNode;
};

export type LeetCardContentProps = {
  input: string | ReactNode;
  func: typeof function;
  funcAsString: string;
};

export type TicketCardContentProps = {
  games: Games;
};

export type Games = { [key: number]: number[] };

export type Ticket = { type: string; draw: number; games: Games };
