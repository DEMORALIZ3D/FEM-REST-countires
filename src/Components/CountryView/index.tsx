import * as React from "react";
import { Country } from "../../lib/types";
import { CountryViewWrapper } from "./styles";

const CountryView: React.FC<{
  selectedCountry: Country;
  setSelected: (country: string) => void;
  countries: Country[];
}> = ({ selectedCountry, setSelected, countries }) => {
  return (
    <CountryViewWrapper flag={selectedCountry.flag}>
      <div className="d-flex my-3 my-lg-5">
        <div>
          <button className="d-flex" onClick={() => setSelected("")}>
            <span className="material-icons me-3">arrow_back</span>
            Back
          </button>
        </div>
      </div>
      <div className="row g-0 g-lg-3 w-100">
        <div className="col-12 col-lg-6">
          <div className="flag" />
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
          <h2 className="mb-4">{selectedCountry.name}</h2>
          <div className="d-flex flex-wrap">
            <div className="">
              <ul className="mb-0 mb-lg-3">
                <li>
                  <strong className="me-3">Native Name:</strong>
                  {selectedCountry.nativeName}
                </li>
                <li>
                  <strong className="me-3">Population:</strong>
                  {selectedCountry.population}
                </li>
                <li>
                  <strong className="me-3">Region:</strong>
                  {selectedCountry.region}
                </li>
                <li>
                  <strong className="me-3">Sub Region:</strong>
                  {selectedCountry.subregion}
                </li>
                <li>
                  <strong className="me-3">Capital:</strong>
                  {selectedCountry.capital}
                </li>
              </ul>
            </div>
            <div className="ms-0 ms-lg-5">
              <ul>
                <li>
                  <strong className="me-3">Top Level Domain:</strong>
                  {selectedCountry.topLevelDomain}
                </li>
                <li>
                  <strong className="me-3">Currencies:</strong>
                  {selectedCountry.currencies
                    .map((language) => language.name)
                    .join(", ")}
                </li>
                <li>
                  <strong className="me-3">languages:</strong>
                  {selectedCountry.languages
                    .map((language) => language.name)
                    .join(", ")}
                </li>
              </ul>
            </div>
          </div>
          {selectedCountry.borders.length !== 0 && (
            <div className="my-4 my-lg-5">
              <h5 className="me-3 mb-3">Border Countries:</h5>
              <div className="border-countries d-flex flex-wrap px-2">
                {selectedCountry.borders.map((borderCode) => {
                  const borderCountry = countries.find(
                    (country) => country.alpha3Code === borderCode
                  ).name;
                  return (
                    <div className="border-country me-2 my-2">
                      {borderCountry}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </CountryViewWrapper>
  );
};

export default CountryView;
