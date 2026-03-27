import type { FooterColumn, NavItem } from '@/types/layout';

export const siteBrand = 'NEXT50';

export const siteNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Communities', href: '/communities' },
  { label: 'LifeCrafter Program', href: '/lifecrafter-program' },
  { label: 'Stories', href: '/stories' },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Events', href: '/events' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Podcasts', href: '/podcasts' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
      { label: 'Guidelines', href: '/guidelines' },
      { label: 'Policies', href: '/policies' },
      { label: 'Courses', href: '/courses' },
    ],
  },
];

export const siteFooterColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: ['About', 'Team', 'Careers', 'Contact Us'],
  },
  {
    title: 'Programs',
    links: ['LifeCrafter', 'Membership'],
  },
  {
    title: 'Resources',
    links: ['Library', 'Blog', 'Guidelines', 'Support'],
  },
  {
    title: 'Legal',
    links: [
      'Privacy Policy',
      'Terms of Use',
      'Instructor Policy',
      'Payment & Refund Policy',
      'IP & Disclaimers',
    ],
  },
];
