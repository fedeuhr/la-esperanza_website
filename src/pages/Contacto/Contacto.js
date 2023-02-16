import React, { useEffect } from "react";
import "./Contacto.css";
import { Helmet } from "react-helmet";
import { goTop } from "../../helpers/goTop";
import { FormContacto } from "../../components/Form/FormContacto";

const Contacto = () => {
  useEffect(() => {
    goTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contacto | Viviendas La Esperanza</title>
      </Helmet>
      <div className="contenedor-contacto__header__titulo">
        <p className="contenedor-contacto__header__titulo__text">
          ¡Construimos en <strong>todo el país!</strong>
        </p>
      </div>
      <FormContacto />
    </>
  );
};

export { Contacto };
