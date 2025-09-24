import React, { createContext, useContext } from "react";
import { Film, FilmDetails, FilmCategory } from "@/types";

interface SSRData {
  popularFilms?: Film[];
  topRatedFilms?: Film[];
  upcomingFilms?: Film[];
  filmDetails?: { [key: string]: FilmDetails };
}

interface SSRContextType {
  data: SSRData;
  setData: (data: SSRData) => void;
}

const SSRContext = createContext<SSRContextType>({
  data: {},
  setData: () => {},
});

export const useSSRData = () => useContext(SSRContext);

export const SSRProvider: React.FC<{
  children: React.ReactNode;
  initialData?: SSRData;
}> = ({ children, initialData = {} }) => {
  const [data, setData] = React.useState<SSRData>(initialData);

  return (
    <SSRContext.Provider value={{ data, setData }}>
      {children}
    </SSRContext.Provider>
  );
};
