/** Hero collage — lifestyle imagery for {@link Hero_section} / home page. */
export const heroCollageImages = [
  {
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=640&q=80',
    alt: 'Friends hiking outdoors',
  },
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=640&q=80',
    alt: 'Cooking together in a kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=640&q=80',
    alt: 'Painting and creative workshop',
  },
] as const satisfies ReadonlyArray<{ src: string; alt: string }>;
