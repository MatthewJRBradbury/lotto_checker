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

export type FavoriteTicket = { type: string; name: string; games: Games };

type ErrorInfo = {
  message: string;
  code: number;
};

type DrawResults = {
  DrawResults: DrawResult[];
  ErrorInfo: ErrorInfo | null;
  Success: boolean;
};

type Games = number[][];

type DrawDataRequest = {
  CompanyId: string;
  MaxDrawCountPerProduct: number;
  OptionalProductFilter: string[];
};

type WinCheckResult = {
  Win: boolean;
  Division: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  Prize: string | undefined;
  Game: number[];
  PrimaryNumberCount: number;
  SecondaryNumberCount: number;
};

type DrawResult = {
  ProductId: string;
  DrawNumber: number;
  DrawDate: string;
  DrawDisplayName: string;
  DrawLogoUrl: string;
  PrimaryNumbers: number[];
  SecondaryNumbers: number[];
  TicketNumbers: never;
  Dividends: DividendResult[];
  PrizeBoostPercent: number;
  PrizeBoost: number;
};

export type DividendResult = {
  Division: number;
  BlocNumberOfWinners: number;
  BlocDividend: number;
  CompanyId: string;
  CompanyNumberOfWinners: number;
  CompanyDividend: number;
  PoolTransferType: string;
  PoolTransferredTo: number;
  PrizeBoostValue: number;
};

export type { DrawResults, DrawResult, Games, DrawDataRequest, WinCheckResult };
