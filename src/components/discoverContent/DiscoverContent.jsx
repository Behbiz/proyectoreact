import React from 'react';
import './discoverContent.scss';
import Title2 from './title2/Title2';
import DiscoverButtons from './discoverButtons/DiscoverButtons';
import Paragraph2 from './paragraph2/Paragraph2';
import Covers from './covers/Covers';



const DiscoverContent = () => {
  return (
    <>
      <div className='discoverContentContainer'>
        <div className='infoCoversContainer'>
          <Title2/>
          <DiscoverButtons/>
          <Paragraph2/>
        </div>
        <div className='coversImgContainer'>
          <Covers/>
        </div>    
      </div>    
    </>
  )
}

export default DiscoverContent