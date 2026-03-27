import { useEffect } from 'react';

/** Sets `document.title` for the lifetime of the component, then restores the previous title. */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
