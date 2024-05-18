"use client";

import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import type { Film } from "../../../types";

const initialState = {
  media: [],
  search: "",
  filter: "",
  setMedia: (): Film[] => [],
  setSearch: (): string => "",
  setFilter: (): string => "",
};

export interface State {
  media: Film[];
  search: string;
  filter: string;
  setMedia: Dispatch<SetStateAction<Film[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<string>>;
}

export const appContext = createContext<State>(initialState);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [media, setMedia] = useState<Film[]>(initialState.media);
  const [search, setSearch] = useState<string>(initialState.search);
  const [filter, setFilter] = useState<string>(initialState.filter);

  const values = {
    media,
    search,
    filter,
    setMedia,
    setSearch,
    setFilter,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export const useAppContext = () => useContext(appContext);
