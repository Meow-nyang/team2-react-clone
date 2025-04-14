import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import SupportPage from '../pages/SupportPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SupportPage />,
      },
      {
        path: 'ESG',
        //element: <ESGPage />,
      },
      {
        path: 'Support',
        //element: <SupportPage />,
      },
    ],
  },
]);
