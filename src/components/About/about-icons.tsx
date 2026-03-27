import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, Calendar, Lightbulb, Lock, Shield, Users } from 'lucide-react';

import type { AboutHowItWorksIconId, AboutTrustIconId } from '@/data/about-page-data';

export const aboutHowItWorksIcons: Record<AboutHowItWorksIconId, LucideIcon> = {
  users: Users,
  lightbulb: Lightbulb,
  calendar: Calendar,
  shield: Shield,
};

export const aboutTrustIcons: Record<AboutTrustIconId, LucideIcon> = {
  'badge-check': BadgeCheck,
  lock: Lock,
};
