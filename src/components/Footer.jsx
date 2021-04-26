import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div className="footer">
      <article>
        <img
          className='logo'
          src={require('../iconer/logo-footer.svg').default}
          alt='logo'
        />
        <p>Et anbudsverktøy levert av Comono AS.</p>
        <p>© 2021</p>
      </article>
    </div>
  );
};

export default Footer;
