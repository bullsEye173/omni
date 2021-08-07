import { makeStyles } from "@material-ui/core";
import React from "react";
import { SearchProvider } from "./SearchContext";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResult";

interface SearchProps {}

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Search(props: SearchProps) {
  const classes = useStyles();
  return (
    <>
      <SearchProvider>
        <SearchInput />
        <SearchResults />
      </SearchProvider>
    </>
  );
}
