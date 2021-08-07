import React, { createContext, useState } from "react";
import { SearchState, SearchStateDefaults } from "./constants";

export interface ISearchContext {
  searchState: SearchState;
  updateSearchState: React.Dispatch<React.SetStateAction<any>>;
}

export const SearchContext = createContext({} as ISearchContext);

export const SearchProvider = ({ children }) => {
  const [searchState, setSearchState] =
    useState<SearchState>(SearchStateDefaults);

  const value: ISearchContext = {
    searchState,
    updateSearchState,
  };

  //function called to update giftInformationState with new value
  function updateSearchState(newState: SearchState) {
    setSearchState((prevState: SearchState) => {
      return { ...prevState, ...newState };
    });
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
