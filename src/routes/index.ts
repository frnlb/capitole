import { getFilms } from "@/services";

export interface RouteConfig {
  path: string;
  loader: (params?: Record<string, string>) => Promise<any>;
  dataKey: string;
}

export const serverRoutes: RouteConfig[] = [
  {
    path: "/",
    loader: getFilms,
    dataKey: "filmData",
  },
];
