import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setLoader(true);
      try {
        const infoFromServer = await fetchByRegion(query);

        setCountries(infoFromServer);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query]);

  const onSubmit = query => {
    setQuery(query);
    setError(null);
  };

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <SearchForm onSubmit={onSubmit} />
        <CountryList data={countries} />
        {loader && <Loader />}
      </Container>
    </Section>
  );
};
