import * as React from "react";
import { initialState, reducer } from "../context";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import axios from "axios";
import CountryCard from "../Components/CountryCard";
import { Country } from "../lib/types";

const Index: React.FC<{
  countries: Country[];
}> = ({ countries }) => {
  const [form, setForm] = React.useState({
    search: "",
    filter: "",
  });
  // const [countries, setCountries] = React.useState(null);

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

  return (
    <div>
      <div className="d-flex my-5">
        <div>
          <Search value={form.search} callback={searchCallback} />
        </div>
        <div className="d-flex flex-grow-1 justify-content-end">
          <Filter value={form.filter} callback={filterCallback} />
        </div>
      </div>
      <div className="row w-100">
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
              <div className="col-3 d-flex flex-column">
                <CountryCard country={country} />
              </div>
            ))}
      </div>
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
