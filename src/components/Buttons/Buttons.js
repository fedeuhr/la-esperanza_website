import React from "react";
import "./Buttons.css";

export default function Buttons() {
  const conversion = () => {
    return window.gtag_report_conversion(
      "https://www.viviendaslaesperanza.com/"
    );
  };

  return (
    <div className="Buttons">
      <a
        className="whatsapp-btn trigger visible-xs visible-sm wow bounceIn"
        target="_blank"
        rel="noreferrer"
        href="#"
        id="whatsapp-btn"
        onClick={conversion}
      >
        <i className="fab fa-whatsapp whatsapp-general" aria-hidden="true"></i>
      </a>
    </div>
  );
}
