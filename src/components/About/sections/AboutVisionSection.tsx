import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';

import { memo } from 'react';

import { aboutVision } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutVisionSection = memo(function AboutVisionSection() {
  return (
    <AboutSection purpose="vision" variant="accent">
      <AboutContainer maxWidth="3xl" className="text-center">
        <h2 className={cn('mb-8', about.heading2Lg)}>{aboutVision.heading}</h2>
        <p className="text-xl leading-relaxed opacity-90">{aboutVision.body}</p>
      </AboutContainer>
    </AboutSection>
  );
});
