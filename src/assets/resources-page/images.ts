/** Bundled imagery for Resources (`src/assets/resources-page/*`). */
import editorialMeeting from './editorial-meeting.jpg';
import editorialWriting from './editorial-writing.jpg';
import heroDesk from './hero-desk.jpg';
import themeCreativity from './theme-creativity.jpg';
import themeFitness from './theme-fitness.jpg';
import themeLegacy from './theme-legacy.jpg';
import themeWellness from './theme-wellness.jpg';

export const resourcesPageImages = {
  hero: heroDesk,
  themeWellness,
  themeFitness,
  themeCreativity,
  themeLegacy,
  editorialWriting,
  editorialMeeting,
} as const;
