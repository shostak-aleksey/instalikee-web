export enum AppRoutes {
  MAIN = 'main',
 
  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';

export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
};
