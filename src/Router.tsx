import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CountryDetailsPage from '@/pages/CountryDetailsPage';
import ErrorPage from '@/pages/ErrorPage';
import MainPage from '@/pages/MainPage';
import BaseLayout from './layouts/BaseLayout';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
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

export default Router;
