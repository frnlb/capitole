import { useState, useEffect } from "react";
import { Film, FilmCategory } from "@/types";
import { filmsService } from "@/services";

export const useFilms = (category: FilmCategory, initialData?: any) => {
  const [films, setFilms] = useState<Film[]>(initialData?.results || []);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      return;
    }
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
  }, [category, initialData]);

  return { films, loading, error };
};
