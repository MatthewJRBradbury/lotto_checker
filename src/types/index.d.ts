import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { ComponentProps, ReactNode } from 'react';
import gameRules from '@/config/gameRules.json';

export type NavItem = {
  title: string;
  to: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type MainNavConfig = {
  mainNav: MainNavItem[];
};

export type SelectProps = ComponentProps<typeof Select>;

export type CardProps = ComponentProps<typeof Card>;

export type BasicCardProps = CardProps & {
  titleTag?: ReactNode;
  description?: ReactNode;
  topRightComponent?: ReactNode;
};

export type BasicSelectProps = SelectProps & {
  className?: string | undefined;
  placeholder?: ReactNode;
  options?: Record<string, Option>[];
};

// Define a generic Option type
type Option<TLabel extends string, TValue> = {
  label: TLabel;
  value: TValue;
  icon?: ReactNode;
};

export type LeetCardContentProps = {
  input: string | ReactNode;
  func: typeof function;
  funcAsString: string;
};

export type TicketCardContentProps = {
  games: Games;
  ticketResult?: DrawWinResult;
};

export type Games = { [key: string]: number[] };

export type Ticket = { type: string; draw: number; games: Games };

export type FavoriteTicket = {
  id: string;
  typeDisplayName: DrawTypeDisplayName;
  type: DrawType;
  name: string;
  games: Games;
  activeDraw?: DrawWinResult; // is active for ticket page
};

type ErrorInfo = {
  message: string;
  code: number;
};

type JsonKeys<T> = keyof T;

type DrawTypeDisplayName =
  | 'Mon, Wed & Friday Lotto'
  | 'Saturday Lotto'
  | 'Powerball'
  | 'Set For Life'
  | 'Oz Lotto';

type DrawType = JsonKeys<typeof gameRules>;

type DrawResults = {
  DrawResults: DrawResult[];
  ErrorInfo: ErrorInfo | null;
  Success: boolean;
};

type DrawDataRequest = {
  CompanyId: string;
  MaxDrawCountPerProduct: number;
  OptionalProductFilter: DrawType[];
};

type DrawWinResult = {
  label: string;
  DrawDate: string;
  Wins: WinCheckResult[];
  TotalPrize: number;
  PrimaryNumbers: number[];
  SecondaryNumbers: number[];
};
type DrawWinResults = Record<string, DrawWinResult>;
type DrawWinResultRecord = { number: string; DrawWinResult: DrawWinResult };

type WinCheckResult = {
  Win: boolean;
  Division: number;
  Prize: number | undefined;
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

type DividendResult = {
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

type WinningCombo = {
  division: number;
  primaryNumberCount: number;
  secondaryNumberCount: number;
};

export type {
  DrawType,
  DrawResults,
  DrawResult,
  DividendResult,
  DrawDataRequest,
  WinCheckResult,
  WinningCombo,
  DrawWinResults,
  DrawWinResultRecord,
  DrawWinResult,
};
