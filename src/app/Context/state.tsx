"use client";

import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import type { Film } from "../../../types";

const initialState = {
  media: [],
  searchTerm: "",
  searchResults: [],
  page: "",
  setMedia: (): Film[] => [],
  setSearchTerm: (): string => "",
  setSearchResults: (): Film[] => [],
  setPage: (): string => "",
};

export interface State {
  media: Film[];
  searchTerm: string;
  searchResults: Film[];
  page: string;
  setMedia: Dispatch<SetStateAction<Film[]>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchResults: Dispatch<SetStateAction<Film[]>>;
  setPage: Dispatch<SetStateAction<string>>;
}

export const appContext = createContext<State>(initialState);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [media, setMedia] = useState<Film[]>(initialState.media);
  const [searchTerm, setSearchTerm] = useState<string>(initialState.searchTerm);
  const [searchResults, setSearchResults] = useState<Film[]>(
    initialState.searchResults,
  );
  const [page, setPage] = useState<string>(initialState.page);

  const values = {
    media,
    searchTerm,
    searchResults,
    page,
    setMedia,
    setSearchTerm,
    setSearchResults,
    setPage,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export const useAppContext = () => useContext(appContext);
