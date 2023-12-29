import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Routes = () => {
  const [loading, setLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {isNavOpen ? (
            <Navbar toggleNav={toggleNav} />
          ) : (
            <>
              <Header toggleNav={toggleNav} />
              <Outlet />
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Routes;
