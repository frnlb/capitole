import { useState, useEffect } from "react";
import { FilmDetails } from "@/types";
import { filmsService } from "@/services";
import { useSSRData } from "@/lib/ssr-context";

export const useFilmDetails = (filmId: number) => {
  const { data } = useSSRData();

  const getInitialFilmDetails = (): FilmDetails | null => {
    return data.filmDetails?.[filmId] || null;
  };

  const [film, setFilm] = useState<FilmDetails | null>(getInitialFilmDetails());
  const [loading, setLoading] = useState(!getInitialFilmDetails());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch if we don't have SSR data
    if (!getInitialFilmDetails()) {
      const fetchFilmDetails = async () => {
        try {
          setLoading(true);
          const filmData = await filmsService.getFilmDetails(filmId);
          setFilm(filmData);
          setError(null);
        } catch (err) {
          setError("Failed to fetch film details");
          console.error("Error fetching film details:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchFilmDetails();
    }
  }, [filmId]);

  return { film, loading, error };
};
