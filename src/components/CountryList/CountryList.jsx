import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ data }) => {
  const location = useLocation();

  return (
    <>
      <Grid>
        {data.map(value => (
          <GridItem key={value.id}>
            <Link to={`/country/${value.id}`} state={location}>
              <img src={value.flag} alt={value.country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
