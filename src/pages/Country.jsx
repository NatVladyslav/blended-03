import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const [countryDetails, setCountryDetails] = useState({});
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const { countryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      try {
        const country = await fetchCountry(countryId);
        setCountryDetails(country);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <GoBackBtn />
        <CountryInfo data={countryDetails} />
        {loader && <Loader />}
      </Container>
    </Section>
  );
};
