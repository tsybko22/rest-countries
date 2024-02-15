import { useFetch } from '@/helpers/hooks/useFetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { getAllCountries } from '@/api/countriesApi';
import { type Country } from '@/api/index.dto';

import BaseLayout from '@/layouts/BaseLayout';
import CountryPage from '@/pages/CountryPage';
import ErrorPage from '@/pages/ErrorPage';
import MainPage from '@/pages/MainPage';

const App = () => {
  const { data, isLoading, error } = useFetch<Country[]>(getAllCountries);

  //exclude Antarctica from results
  const countries = data?.filter((country) => country.name.common !== 'Antarctica');

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
          element: <CountryPage />,
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
