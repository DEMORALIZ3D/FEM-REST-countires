import * as React from "react";
import { Country } from "../../lib/types";
import { CountryCardWrapper } from "./styles";

const CountryCard: React.FC<{
  country: Country;
  selected: boolean;
  setSelected: (name: string) => void;
}> = ({ country, selected, setSelected }) => {
  return (
    <CountryCardWrapper
      flag={country.flag}
      selected={selected}
      className="d-flex flex-column flex-grow-1"
    >
      <div>
        <div className="country-flag" />
      </div>
      <div className="p-3 d-flex flex-grow-1 flex-column">
        <h4 className="mb-4 fw-bold">{country.name}</h4>
        <div className="info-area">
          <p className="mb-1">
            <strong>Population</strong>: {country.population}
          </p>
          <p className="mb-1">
            <strong>Region</strong>: {country.region}
          </p>
          <p>
            <strong>Capital</strong>: {country.capital}
          </p>
        </div>
        <div className="d-flex flex-grow-1 justify-content-end align-items-end">
          <span
            className="material-icons pointer"
            title="open to read more"
            onClick={() => setSelected(country.name)}
          >
            arrow_forward
          </span>
        </div>
      </div>
    </CountryCardWrapper>
  );
};

export default CountryCard;
