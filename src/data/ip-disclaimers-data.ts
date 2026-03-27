/** Static copy and structure for the IP & Disclaimers / Legal Information page. */

export const ipDisclaimersTabs = [
  { hash: '#ip', label: 'IP & Disclaimers' },
  { hash: '#liability', label: 'Liability & Cookies' },
  { hash: '#termination', label: 'Termination' },
  { hash: '#redressal', label: 'Redressal & Law' },
] as const;

export const ipDisclaimersCookieCards = [
  {
    title: 'Essential Cookies',
    description:
      'Necessary for the website to function properly. These cannot be disabled in our systems.',
  },
  {
    title: 'Analytics Cookies',
    description:
      'Help us understand how visitors interact with the website by collecting and reporting information anonymously.',
  },
] as const;

export type IpDisclaimersSectionBody =
  | { kind: 'paragraphs'; paragraphs: readonly string[] }
  | { kind: 'quote'; text: string }
  | { kind: 'cookies' }
  | { kind: 'grievance'; intro: string; email: string; address: string }
  | { kind: 'policy-updates'; paragraphs: readonly string[]; lastUpdated: string };

export type IpDisclaimersSection = {
  id?: string;
  badge: string;
  title: string;
  body: IpDisclaimersSectionBody;
};

export const ipDisclaimersSections: readonly IpDisclaimersSection[] = [
  {
    id: 'ip',
    badge: '07',
    title: 'Intellectual Property Policy',
    body: {
      kind: 'paragraphs',
      paragraphs: [
        'All content, trademarks, logos, and data displayed on MyNext50, including but not limited to text, graphics, icons, and software, are the exclusive property of MyNext50 or its licensors.',
        'Unauthorized use, reproduction, or distribution of any materials on this platform is strictly prohibited and may result in severe civil and criminal penalties. We reserve all rights not expressly granted in these terms.',
      ],
    },
  },
  {
    badge: '08',
    title: 'Disclaimer',
    body: {
      kind: 'quote',
      text: 'The information provided by MyNext50 is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.',
    },
  },
  {
    id: 'liability',
    badge: '09',
    title: 'Limitation of Liability',
    body: {
      kind: 'paragraphs',
      paragraphs: [
        'In no event shall MyNext50, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.',
      ],
    },
  },
  {
    id: 'cookies',
    badge: '10',
    title: 'Cookie Policy',
    body: { kind: 'cookies' },
  },
  {
    id: 'termination',
    badge: '11',
    title: 'Account Termination',
    body: {
      kind: 'paragraphs',
      paragraphs: [
        'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.',
      ],
    },
  },
  {
    id: 'redressal',
    badge: '12',
    title: 'Grievance Redressal',
    body: {
      kind: 'grievance',
      intro:
        'If you have any grievances regarding our services or policies, please contact our appointed Grievance Officer.',
      email: 'legal@mynext50.com',
      address: 'Corporate HQ, Tech Hub District',
    },
  },
  {
    badge: '13',
    title: 'Governing Law',
    body: {
      kind: 'paragraphs',
      paragraphs: [
        'These terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is registered, without regard to its conflict of law provisions. Any legal action or proceeding related to your access to, or use of, the service shall be instituted in the state or federal courts.',
      ],
    },
  },
  {
    badge: '14',
    title: 'Policy Updates',
    body: {
      kind: 'policy-updates',
      paragraphs: [
        'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.',
      ],
      lastUpdated: 'Last Updated: October 24, 2023',
    },
  },
];

export const ipDisclaimersPageHero = {
  title: 'Legal Information',
  description:
    'Comprehensive details regarding Intellectual Property, Disclaimers, Liability, and our regulatory compliance policies.',
} as const;

export const ipDisclaimersGrievanceCta = {
  href: '/contact',
  label: 'File a Grievance',
} as const;
