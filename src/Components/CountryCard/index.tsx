import * as React from "react";
import { Country } from "../../lib/types";
import { CountryCardWrapper } from "./styles";

const CountryCard: React.FC<{
  country: Country;
}> = ({ country }) => {
  return (
    <CountryCardWrapper
      flag={country.flag}
      className="d-flex flex-column flex-grow-1"
    >
      <div>
        <div className="country-flag" />
      </div>
      <div className="p-3 d-flex flex-grow-1 flex-column">
        <h4 className="mb-4">{country.name}</h4>
        <div className="info-area">
          <p>
            <strong>Population</strong>: {country.population}
          </p>
          <p>
            <strong>Region</strong>: {country.region}
          </p>
          <p>
            <strong>Capital</strong>: {country.capital}
          </p>
        </div>
        <div className="d-flex flex-grow-1 justify-content-end align-items-end">
          <span className="material-icons pointer" title="open to read more">
            arrow_forward
          </span>
        </div>
      </div>
    </CountryCardWrapper>
  );
};

export default CountryCard;
