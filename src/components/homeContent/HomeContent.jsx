import React from 'react';
import './homeContent.scss';
import Title1 from './title1/Title1';
import Paragraph from './paragraph/Paragraph';
import Button1 from './button1/Button1';
import PhotoHome from './photoHome/PhotoHome';



const Home_content = () => {
  return (
    <>
      <div className='homeContentContainer'>
        <div>
            <PhotoHome/>
        </div>
        <div className='homeMobilContainer'>
            <Title1/>
            <Paragraph/>
            <Button1/>
        </div>
      </div>
    </>
  )
}

export default Home_content