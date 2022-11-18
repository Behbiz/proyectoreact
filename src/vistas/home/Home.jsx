import React from 'react'
import girl from "../../assets/landing-page-girl.png";
import Header from '../../components/header/Header'

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
    </body>
  )
}
export default Home