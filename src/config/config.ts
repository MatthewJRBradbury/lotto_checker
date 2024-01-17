import { MainNavConfig } from '@/types';

export const navConfig: MainNavConfig = {
  mainNav: [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Tickets',
      to: '/tickets',
    },
    {
      title: 'Leet Code',
      to: '/leetcode',
    },
  ],
};

export const globalConfig = {
  siteName: 'Lotto Checker',
  footerContent: 'Built by MRJB',
};
