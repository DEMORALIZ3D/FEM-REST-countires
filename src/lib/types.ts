export type Country = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: 48759958;
  latlng: [4.0, -72.0];
  demonym: string;
  area: 1141748.0;
  gini: 55.9;
  timezones: string[];
  borders: string[];
  nativeName: string[];
  numericCode: string;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    [code: string]: string;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }[];
  cioc: string;
};
