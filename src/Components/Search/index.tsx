import * as React from "react";
import { SearchWrapper } from "./styles";

const Search: React.FC<{
  value: string;
  callback: (query: string) => void;
}> = ({ value, callback }) => {
  return (
    <SearchWrapper className="d-flex align-items-center">
      <span className="search-icon material-icons me-2">search</span>
      <input
        placeholder="Search for a country..."
        value={value}
        name="search-input"
        aria-label="Search for a country"
        title="Type a country to be able to search for it"
        onChange={(evt) => callback(evt.target.value)}
      />
      {value && (
        <div className="d-flex align-items-center justify-content-end mx-2">
          <span className="material-icons pointer" onClick={() => callback("")}>
            clear
          </span>
        </div>
      )}
    </SearchWrapper>
  );
};

export default Search;
