import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import AboutSpc from '../pages/AboutSpc';
import SPCESGPage from '../components/SPCESGPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SPCESGPage />,
      },
      
    ],
  },
]);
