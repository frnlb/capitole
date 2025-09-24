import { useState, useEffect } from "react";
import { Film, FilmCategory } from "@/types";
import { filmsService } from "@/services";

export const useFilms = (category: FilmCategory) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const data = await filmsService.getFilms(category);
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
  }, [category]);

  return { films, loading, error };
};
