import type { Film, FilmCategory } from "@/types";
const BASE_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_READ_ACCESS_TOKEN;
const BASE_CATEGORY: FilmCategory = "popular";

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
      const response = await fetch(`${BASE_URL}/${category}`, options);
      if (!response.ok) {
        throw new Error(`Error while fetching films data: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch films data:", error);
      throw error;
    }
  },
  getFilmDetails: async (id: Film["id"]) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, options);
      if (!response.ok) {
        throw new Error(
          `Error while fetching film details: ${response.status}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch film details:", error);
      throw error;
    }
  },
  getFilms: async () => {
    try {
      const [popularFilms, topRatedFilms, upcomingFilms] = await Promise.all([
        filmsService.getFilmsByCategory("popular"),
        filmsService.getFilmsByCategory("popular"),
        filmsService.getFilmsByCategory("popular"),
      ]);
      return {
        popularFilms,
        topRatedFilms,
        upcomingFilms,
      };
    } catch (error) {
      console.error(`getFilms failed: ${error}`);
      throw Error(`No films retrieved: ${error}`);
    }
  },
};
