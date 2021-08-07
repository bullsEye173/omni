import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import { useTranslation } from "react-i18next";
import { ISearchContext, SearchContext } from "./SearchContext";
import { orchestrationSuggestions, cloudSuggestions } from "./constants";

interface SearchInputProps {}

export default function SearchInput(props: SearchInputProps) {
  const { t } = useTranslation();

  const { searchState, updateSearchState } =
    useContext<ISearchContext>(SearchContext);

  function handleChange(event) {
    const val: string = event.target.value;
    searchState.searchValue = val;
    searchState.orchestrationSuggestions =
      val && val !== ""
        ? orchestrationSuggestions.filter((name) =>
            name.toLocaleUpperCase().includes(val.toLocaleUpperCase())
          )
        : orchestrationSuggestions;
    searchState.cloudSuggestions =
      val && val !== ""
        ? cloudSuggestions.filter((name) =>
            name.toLocaleUpperCase().includes(val.toLocaleUpperCase())
          )
        : cloudSuggestions;
    updateSearchState(searchState);
  }

  return (
    <>
      <CustomInput
        id="search-input"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          onChange: (event) => handleChange(event),
          value: searchState.searchValue,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
