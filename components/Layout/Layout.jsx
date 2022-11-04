import React from 'react';
import Head from '../Head';

const Layout = ({children}) => {
  return (
    <>
      <Head/>
      <main>
        { children }
      </main>
    </>
  );
};

export default Layout;