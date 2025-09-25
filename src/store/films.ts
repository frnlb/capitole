import { create } from "zustand";
import { Film } from "@/types";

interface DataState {
  films: Film[];
  setFilms: (films: Film[]) => void;
  getFilmById: (id: string) => Film | undefined;
}

export const useDataStore = create<DataState>((set, get) => ({
  films: [],

  setFilms: (filmsArray) => set({ films: filmsArray }),

  getFilmById: (id) => {
    return get().films.find((film) => film.id === id);
  },
}));
