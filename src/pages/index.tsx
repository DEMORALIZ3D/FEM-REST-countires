import * as React from "react";
import { initialState, reducer } from "../context";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import axios from "axios";
import CountryCard from "../Components/CountryCard";
import { Country } from "../lib/types";
import CountryView from "../Components/CountryView";

const Index: React.FC<{
  countries: Country[];
}> = ({ countries }) => {
  const [form, setForm] = React.useState({
    search: "",
    filter: "",
    selected: "",
  });
  const selectedCountry = countries.find(
    (country) => country.name === form.selected
  );
  const searchCallback = (query) => {
    return setForm((prev) => ({
      ...prev,
      search: query,
    }));
  };

  const filterCallback = (query) => {
    return setForm((prev) => ({
      ...prev,
      filter: query,
    }));
  };

  const setSelected = (selected) => {
    return setForm((prev) => ({
      ...prev,
      selected,
    }));
  };
  return (
    <div>
      {form.selected === "" ? (
        <div>
          <div className="d-flex row g-0 my-3 my-lg-5">
            <div className="col-12 col-lg-6 ps-0 ps-lg-4">
              <Search value={form.search} callback={searchCallback} />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-grow-1 justify-content-start justify-content-lg-end mt-3 mt-lg-0 pe-0 pe-lg-3">
              <Filter value={form.filter} callback={filterCallback} />
            </div>
          </div>
          <div className="row g-0 g-lg-5 w-100">
            {countries &&
              countries
                .filter((country) => {
                  if (form.search) {
                    return country.name
                      .toLowerCase()
                      .includes(form.search.toLowerCase());
                  }

                  return country;
                })
                .filter((country) => {
                  if (form.filter) {
                    return country.region === form.filter;
                  }

                  return country;
                })
                .map((country) => (
                  <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex flex-column mx-0 px-lg-5 mb-4 mb-lg-4">
                    <CountryCard
                      country={country}
                      selected={country.name === form.selected}
                      setSelected={setSelected}
                    />
                  </div>
                ))}
          </div>
        </div>
      ) : (
        <div>
          <CountryView
            selectedCountry={selectedCountry}
            setSelected={setSelected}
            countries={countries}
          />
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const countries = await axios("https://restcountries.eu/rest/v2/all", {
    method: "GET",
  });

  return {
    props: {
      countries: countries.data,
    },
    revalidate: 5,
  };
}

export default Index;
