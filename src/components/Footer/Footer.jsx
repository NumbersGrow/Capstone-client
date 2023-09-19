import facebook from "../../assets/icons/Icon-facebook.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";

import "./Footer.scss";

const Footer = () => {
    return (
      <div>
        <h3>Our Contacts:</h3>
        <p>Email:</p>
        <a className="footer__email" href="mailto:info@farmapp.com">info@farmapp.com</a>
        <p>Phone:</p>
        <p>+1 (123) 456-78-90</p>
        <div className="socials">
        <img src={facebook} className="socials__facebook socials__img" alt="facebook"/>
        <img src={instagram} className="socials__instagram socials__img" alt="instagram"/>
        <img src={twitter} className="socials__twitter socials__img" alt="twitter"/>
        </div>
      </div>
    );
  };
  
  export default Footer;