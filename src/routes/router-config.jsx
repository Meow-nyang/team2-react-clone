import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import SupportPage from '../pages/SupportPage';
import MainPage from '../pages/MainPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'ESG',
        //element: <ESGPage />,
      },
      {
        path: 'Support',
        element: <SupportPage />,
      },
    ],
  },
]);
