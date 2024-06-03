"use client";

import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import type { Film } from "../../../types";

const initialState = {
  media: [],
  searchTerm: "",
  searchResults: [],
  page: "",
  bookmarkEvent: false,
  isPlaying: false,
  setMedia: (): Film[] => [],
  setSearchTerm: (): string => "",
  setSearchResults: (): Film[] => [],
  setPage: (): string => "",
  setBookmarkEvent: (): boolean => false,
  setIsPlaying: (): boolean => false,
};

export interface State {
  media: Film[];
  searchTerm: string;
  searchResults: Film[];
  page: string;
  bookmarkEvent: boolean;
  isPlaying: boolean;
  setMedia: Dispatch<SetStateAction<Film[]>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchResults: Dispatch<SetStateAction<Film[]>>;
  setPage: Dispatch<SetStateAction<string>>;
  setBookmarkEvent: Dispatch<SetStateAction<boolean>>;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
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
  const [bookmarkEvent, setBookmarkEvent] = useState<boolean>(
    initialState.bookmarkEvent,
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(initialState.isPlaying);

  const values = {
    media,
    searchTerm,
    searchResults,
    page,
    bookmarkEvent,
    setMedia,
    setSearchTerm,
    setSearchResults,
    setPage,
    setBookmarkEvent,
    isPlaying,
    setIsPlaying,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export const useAppContext = () => useContext(appContext);
