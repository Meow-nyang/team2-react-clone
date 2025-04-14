import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
//import styles from '../styles/RootLayout.module.scss';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main
        style={{ minHeight: '70vh', padding: '1.5rem', paddingTop: '20px' }}
      >
        {/* 페이지 내용 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
