export const transformCountriesData = data => {
  return data.map(
    ({ name: { common }, capital, flags, population, languages }) => ({
      id: common,
      country: common,
      flag: flags.png,
      capital,
      population,
      languages,
    }),
  );
};

export const transformCountryData = data => {
  return data.map(
    ({
      name: { common, official },
      flags,
      capital,
      population,
      languages,
    }) => ({
      id: common,
      countryName: official,
      flag: flags.png,
      capital,
      population,
      languages: Object.values(languages),
    }),
  );
};
