import React from 'react';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', padding: '2rem', paddingTop: '80px' }}>
        {/* 페이지 내용 */}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
