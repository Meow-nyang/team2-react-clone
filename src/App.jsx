import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/router-config';

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
