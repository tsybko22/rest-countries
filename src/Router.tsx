import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';
import CountryPage from '@/pages/CountryPage';
import ErrorPage from '@/pages/ErrorPage';
import MainPage from '@/pages/MainPage';

const App = () => {
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
          element: <CountryPage />,
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
