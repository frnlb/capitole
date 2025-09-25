import type { FilmCategory } from "@/types";
const BASE_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_READ_ACCESS_TOKEN;
const BASE_CATEGORY: FilmCategory = "popular";
const GENRE = "genre/movie/list";
const MOVIES = "movie";

const options = {
  method: "GET",
  headers: {
    "User-Agent": "insomnia/11.6.0",
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const filmsService = {
  getFilmsByCategory: async (category: FilmCategory = BASE_CATEGORY) => {
    try {
      const response = await fetch(
        `${BASE_URL}/${MOVIES}/${category}`,
        options
      );
      if (!response.ok) {
        throw new Error(`Error while fetching films data: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch films data: ", error);
      throw error;
    }
  },
  getFilmsGenres: async () => {
    try {
      const response = await fetch(`${BASE_URL}/${GENRE}`, options);
      if (!response.ok) {
        throw new Error(
          `Error while fetching films's genres: ${response.status}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch films's genres: ", error);
      throw error;
    }
  },
};

export const getFilms = async () => {
  try {
    const [genres, popularFilms, topRatedFilms, upcomingFilms] =
      await Promise.all([
        filmsService.getFilmsGenres(),
        filmsService.getFilmsByCategory("popular"),
        filmsService.getFilmsByCategory("top_rated"),
        filmsService.getFilmsByCategory("upcoming"),
      ]);
    return {
      genres,
      popularFilms,
      topRatedFilms,
      upcomingFilms,
    };
  } catch (error) {
    console.error("Failed to get all films ", error);
    throw error;
  }
};
