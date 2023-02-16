import React from "react";
import "./Layout.css";
import Buttons from "../Buttons/Buttons";

const Layout = ({ children }) => {
  return (
    <>
      <div className="contenedor-layout">
        {children}
        <Buttons></Buttons>
      </div>
    </>
  );
};

export { Layout };
