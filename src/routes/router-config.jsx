import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import AboutPage from '../pages/AboutPage';
import EsgManage from '../pages/EsgManagePage';
import EsgReport from '../pages/EsgReportPage';
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
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'esg/management',
        element: <EsgManage />,
      },
      {
        path: 'esg/esgreport',
        element: <EsgReport />,
      },
      {
        path: 'Support',
        element: <SupportPage />,
      },
    ],
  },
]);
