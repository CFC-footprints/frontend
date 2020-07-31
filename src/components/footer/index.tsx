import React from "react";

import FooterImage from "../../images/Footer.png";
import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <img
        src={FooterImage}
        width="50"
        height="50"
        className="footer-image"
        alt="React Bootstrap logo"
      />{" "}
    </div>
  );
}

export default Footer;
