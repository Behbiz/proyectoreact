import React from "react";
import "../../styles/footer.css"
import {Link} from "react-router-dom"
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";

const Footer =() =>{
    return (
    <div ClassName="footer">
        <div ClassName="about-contact">
            <div>About Us</div>
            <div>Contact</div>
        </div>
        <div ClassName="redSociales">
            < Link to = ""><img src={Twitter} alt="" width="20px" /><span>Twitter</span></Link>
            < Link to = ""><img src={Facebook} alt="" width="20px" /><span>Facebook</span></Link>
        </div>      
    </div>
              
    );
} 


export default Footer;