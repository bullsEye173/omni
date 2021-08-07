import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "./SearchContext";

interface SearchResultProps {}

export default function SearchResults(props: SearchResultProps) {
  const { t } = useTranslation();

  const { searchState } = useContext(SearchContext);

  function onMouseDown(event, suggestion) {
    event.preventDefault();
  }

  function getSuggestions(suggestions: string[]) {
    return (
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div className="suggestion" key={index}>
            <div>-</div>
            <h4 onMouseDown={(event) => onMouseDown(event, suggestion)}>
              {t(suggestion)}
            </h4>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="expanded">
        <div className="expanded-left">
          <h3>{t("Orchestrations")}</h3>
          <Link href="/orchestration">
            <a> {getSuggestions(searchState.orchestrationSuggestions)}</a>
          </Link>
        </div>

        <div className="expanded-right">
          <h3>{t("Cloud Services/Workflows")}</h3>
          {getSuggestions(searchState.cloudSuggestions)}
        </div>
      </div>
    </>
  );
}
