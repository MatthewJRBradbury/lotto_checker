import { MainNavConfig } from '@/types';

export const navConfig: MainNavConfig = {
  mainNav: [
    {
      title: 'Home',
      to: '/lotto_checker',
    },
    {
      title: 'Tickets',
      to: '/lotto_checker/tickets',
    },
    {
      title: 'Leet Code',
      to: '/lotto_checker/leetcode',
    },
  ],
};

export const globalConfig = {
  siteName: 'Lotto Checker',
  footerContent: 'Built by MJRB',
};
