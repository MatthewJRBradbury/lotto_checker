import { Card } from '@/components/ui/card';
import { ComponentProps } from 'react';

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
