import React from "react";
import "./footer.scss";
import TwitterIcon from "../../Assets/images/twitter.svg";
import FacebookIcon from "../../Assets/images/facebook.svg";

const Footer = () => {
  return (
    <>
      <footer className="footerContainer">
        <div className="contactContainer">
          <a href="https://factoriaf5.org/">
            <span>About Us</span>
          </a>
          <a href="https://factoriaf5.org/">
            <span>Contact</span>
          </a>
        </div>
        <div className="socialMedia">
          <a href="https://twitter.com/?lang=es">
            <div className="twitterContainer">
              <img className="iconSocialMedia" src={TwitterIcon} alt="Twitter Icon" />
              <span>Twitter</span>
            </div>
          </a>
          <a href="https://www.facebook.com/factoriaf5/">
            <div className="facebookContainer">
              <img className="iconSocialMedia" src={FacebookIcon} alt="Facebook Icon" />
              <span>Facebook</span>
            </div>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
