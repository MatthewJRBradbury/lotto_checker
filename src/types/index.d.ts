export type NavItem = {
  title: string;
  to: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type MainNavConfig = {
  mainNav: MainNavItem[];
};
