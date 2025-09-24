import { useState, useEffect } from "react";
import { Film, FilmCategory } from "@/types";
import { filmsService } from "@/services/tmdb";
import { useSSRData } from "@/lib/ssr-context";

export const useFilms = (category: FilmCategory) => {
  const { data } = useSSRData();

  const getInitialFilms = (): Film[] => {
    switch (category) {
      case "popular":
        return data.popularFilms || [];
      case "top_rated":
        return data.topRatedFilms || [];
      case "upcoming":
        return data.upcomingFilms || [];
      default:
        return [];
    }
  };

  const [films, setFilms] = useState<Film[]>(getInitialFilms());
  const [loading, setLoading] = useState(!getInitialFilms().length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (getInitialFilms().length === 0) {
      const fetchFilms = async () => {
        try {
          setLoading(true);
          const data = await filmsService.getFilmsByCategory(category);
          setFilms(data);
          setError(null);
        } catch (err) {
          setError("Failed to fetch films");
          console.error("Error fetching films:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchFilms();
    }
  }, [category]);

  return { films, loading, error };
};
