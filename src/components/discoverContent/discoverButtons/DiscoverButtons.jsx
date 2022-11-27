import React from 'react';
import Microphone from '../../../Assets/images/microphone.svg';
import Albums from '../../../Assets/images/albums.svg';
import More from '../../../Assets/images/more.svg';

const DiscoverButtons = () => {
  return (
    <>
      <div className='buttonsContainer'>
        <button className='iconButtons'><img  className='iconImgs' src={Microphone} alt="Microphone"/>Charts</button>
        <button className='iconButtons'><img  className='iconImgs' src={Albums} alt="Albums"/>Albums</button>
        <button className='iconButtons'><img  className='iconImgs' src={More} alt="More"/>More</button>
      </div>
    </>
  )
}

export default DiscoverButtons