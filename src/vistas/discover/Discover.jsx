import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Covers from "../../assets/covers.jpg";
import Albuns from "../../assets/albums.svg";
import Microfone from "../../assets/microphone.svg";
import More from "../../assets/more.svg";

const Discover = () => {
  return (
    <body>
        <Header/>
        
          <h1>Discover new music</h1>
          <div>
          <img src={Microfone} alt="" width="50" />
          <img src={Albuns} alt="" width="50" />
          <img src={More} alt="" width="50" />
        </div>
        
        <div>
        <p>By you can benefit by listening to the latest albums released</p>
        </div>
         
        <div>
          <img src={Covers} alt="" width="350" />
        </div>
       
        <Footer/>
    </body>
  );
}
export default Discover