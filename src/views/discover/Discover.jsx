import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import DiscoverContent from '../../components/discoverContent/DiscoverContent';

const Discover = () => {
  return (
    <>
      <Navbar/>
      <main>
      <DiscoverContent/>
      </main>
      <Footer/>
    </>
    
  )
}

export default Discover