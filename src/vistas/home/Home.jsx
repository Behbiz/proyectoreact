import React from 'react'
import girl from "../../assets/landing-page-girl.png";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import Covers from "../../assets/covers.jpg";
import Albuns from "../../assets/albums.svg";
import Microfone from "../../assets/microphone.svg";
import More from "../../assets/more.svg";

const Home = () => {
  return (
    <body>
       <Header/>
       <div className="home">
       <div className="imagen-home">
       <img src={girl} alt="" width="350" />
       </div>
       <div className="text-home">
       <h1>Feel The Music</h1>
       <p>Stream over 20 thousand songs with one click</p>
       </div>
       </div>
       <div className="text-discover">
       <h1 className="h1Discover">Discover new music</h1>
       
          <div>
          <img src={Microfone} alt="" width="50" />
          <img src={Albuns} alt="" width="50" />
          <img src={More} alt="" width="50" />
        </div>
        <div>
        <p>By you can benefit by listening to the latest albums released</p>
        </div>
        </div>
         
        <div className="imagen-discover">
          <img src={Covers} alt="" width="350" />
        </div>
       <div>
        
       </div>
        
    </body>
  )
}
export default Home