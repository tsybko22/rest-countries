import { useFetch } from '@/helpers/hooks/useFetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { getAllCountries } from '@/api/countriesApi';
import { type Country } from '@/api/index.dto';

import BaseLayout from '@/layouts/BaseLayout';
import CountryDetailsPage from '@/pages/CountryDetailsPage';
import ErrorPage from '@/pages/ErrorPage';
import MainPage from '@/pages/MainPage';

const App = () => {
  const { data: countries, isLoading, error } = useFetch<Country[]>(getAllCountries);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: (
            <MainPage
              countries={countries}
              isLoading={isLoading}
              error={error}
            />
          ),
        },
        {
          path: 'country/:countryName',
          element: <CountryDetailsPage />,
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
