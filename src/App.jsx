import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  // return <>{loading ? <Preloader /> : <Navbar />}</>;
  return <Navbar />;
}

export default App;
