/* Route tree is config (not a refresh boundary); shared with tests via `createMemoryRouter`. */
/* eslint-disable react-refresh/only-export-components -- exports `appRouteObjects` + lazy route modules */
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

import HomeLayout from './Layout/HomeLayout';
import { placeholderRouteConfigs } from './data/app-routes';
import Home from '@/pages/Home.tsx';

const PlaceholderPage = lazy(() => import('@/pages/PlaceholderPage.tsx'));
const NotFound = lazy(() => import('@/pages/NotFound.tsx'));
const PrivacyPolicyPage = lazy(() => import('@/pages/privacy-policy-page.tsx'));
const TermsOfUsePage = lazy(() => import('@/pages/terms-of-use-page.tsx'));
const InstructorPolicyPage = lazy(() => import('@/pages/instructor-policy-page.tsx'));
const ContactPage = lazy(() => import('@/pages/contact-page.tsx'));
const EventsPage = lazy(() => import('@/pages/events-page.tsx'));
const GuidelinesPage = lazy(() => import('@/pages/guidelines-page.tsx'));
const PoliciesPage = lazy(() => import('@/pages/PoliciesPage.tsx'));
const PaymentRefundPolicyPage = lazy(() => import('@/pages/payment-refund-policy-page.tsx'));
const IpDisclaimersPage = lazy(() => import('@/pages/ip-disclaimers-page.tsx'));
const ResourcesHubPage = lazy(() => import('@/pages/resources-hub-page.tsx'));
const ResourcesLibraryPage = lazy(() => import('@/pages/resources-library-page.tsx'));
const AboutPage = lazy(() => import('@/pages/about-page.tsx'));
const StoriesPage = lazy(() => import('@/pages/stories-page'));
const CommunitiesPage = lazy(() => import('@/pages/communities-page'));
const LifeCrafterProgramPage = lazy(() => import('@/pages/lifecrafter-program-page'));

/** Shared between `createBrowserRouter` (production) and `createMemoryRouter` (tests). */
export const appRouteObjects: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'stories', element: <StoriesPage /> },
      { path: 'communities', element: <CommunitiesPage /> },
      { path: 'lifecrafter-program', element: <LifeCrafterProgramPage /> },
      { path: 'terms', element: <TermsOfUsePage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'instructor-policy', element: <InstructorPolicyPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'guidelines', element: <GuidelinesPage /> },
      { path: 'policies', element: <PoliciesPage /> },
      { path: 'payment-refund-policy', element: <PaymentRefundPolicyPage /> },
      { path: 'ip-disclaimers', element: <IpDisclaimersPage /> },
      { path: 'resources/library', element: <ResourcesLibraryPage /> },
      { path: 'resources', element: <ResourcesHubPage /> },
      ...placeholderRouteConfigs.map(({ path, title }) => ({
        path,
        element: <PlaceholderPage title={title} />,
      })),
      { path: '*', element: <NotFound /> },
    ],
  },
];
