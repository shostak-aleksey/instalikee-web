import React, { ReactNode } from 'react';

// Хук для проверки медиа-запроса
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false);

  React.useLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', listener);
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

interface ResponsiveVisibilityProps {
  children: ReactNode;
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
  isWidescreen?: boolean;
  isFullHD?: boolean;
}

export const ResponsiveVisibility: React.FC<ResponsiveVisibilityProps> = ({
  children,
  isMobile,
  isTablet,
  isDesktop,
  isWidescreen,
  isFullHD,
}) => {
  const isMobileMatch = useMediaQuery('(max-width: 576px)');
  const isTabletMatch = useMediaQuery(
    '(min-width: 577px) and (max-width: 768px)',
  );
  const isDesktopMatch = useMediaQuery(
    '(min-width: 769px) and (max-width: 992px)',
  );
  const isWidescreenMatch = useMediaQuery(
    '(min-width: 993px) and (max-width: 1200px)',
  );
  const isFullHDMatch = useMediaQuery('(min-width: 1201px)');

  if (
    !(isMobile && isMobileMatch) &&
    !(isTablet && isTabletMatch) &&
    !(isDesktop && isDesktopMatch) &&
    !(isWidescreen && isWidescreenMatch) &&
    !(isFullHD && isFullHDMatch)
  ) {
    return <>{children}</>;
  }

  return null;
};
