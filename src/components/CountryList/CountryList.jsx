import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ data }) => {
  return (
    <>
      <Grid>
        {data.map(value => (
          <GridItem key={value.id}>
            <Link>
              <img src={value.flag} alt={value.country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
