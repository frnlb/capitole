import { create } from "zustand";
import { Film, Genre } from "@/types";

interface FilmCategoryResponse {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}

interface FilmData {
  genres: { genres: Genre[] };
  popularFilms: FilmCategoryResponse;
  topRatedFilms: FilmCategoryResponse;
  upcomingFilms: FilmCategoryResponse;
}

interface FilmsState {
  isHydrated: boolean;
  genres: Genre[];
  popularFilms: Film[];
  topRatedFilms: Film[];
  upcomingFilms: Film[];

  setFilmsData: (filmsData: FilmData) => void;

  getFilmById: (id: number) => Film | undefined;
  getAllData: () => {
    genres: Genre[];
    popularFilms: Film[];
    topRatedFilms: Film[];
    upcomingFilms: Film[];
  };
}

export const useFilmsStore = create<FilmsState>((set, get) => ({
  isHydrated: false,
  genres: [],
  popularFilms: [],
  topRatedFilms: [],
  upcomingFilms: [],

  setFilmsData: (filmsData) => {
    set({
      isHydrated: true,
      genres: filmsData.genres.genres,
      popularFilms: filmsData.popularFilms.results,
      topRatedFilms: filmsData.topRatedFilms.results,
      upcomingFilms: filmsData.upcomingFilms.results,
    });
  },

  getFilmById: (id) => {
    const { popularFilms, topRatedFilms, upcomingFilms } = get();
    return (
      popularFilms.find((film) => film.id === id) ||
      topRatedFilms.find((film) => film.id === id) ||
      upcomingFilms.find((film) => film.id === id)
    );
  },

  getAllData: () => {
    const state = get();
    return {
      genres: state.genres,
      popularFilms: state.popularFilms,
      topRatedFilms: state.topRatedFilms,
      upcomingFilms: state.upcomingFilms,
    };
  },
}));
