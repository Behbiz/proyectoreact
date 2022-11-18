import React from "react";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom"


const Header =() =>{
    return (
      <div className="header">
        
          <img src={logo} alt="" /><span>Soundwave</span>
        
        <nav>
          <ul>
            <Link to="/Discover"><li>Discover</li></Link>
            <Link to="/Join"><li>Join</li></Link>
          </ul>
        </nav>
        
      </div>
              
    );
} 


export default Header;