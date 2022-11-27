import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import HomeContent from '../../components/homeContent/HomeContent';

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <HomeContent/>
      </main>
    </>

  )
}

export default Home