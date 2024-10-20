import { Heading } from 'components';
import { Header } from 'components';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() =>
  import('./pages/Home').then(module => ({ default: module.Home })),
);
const SearchCountry = lazy(() =>
  import('./pages/SearchCountry').then(module => ({
    default: module.SearchCountry,
  })),
);
const Country = lazy(() =>
  import('./pages/Country').then(module => ({ default: module.Country })),
);

export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
