import React from 'react';
import HeadSematic from '../Head';

const Layout = ({children}) => {
  return (
    <>
      <HeadSematic/>
      <main>
        { children }
      </main>
    </>
  );
};

export default Layout;