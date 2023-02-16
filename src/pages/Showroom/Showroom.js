import React, { useEffect, useState } from "react";
import "./Showroom.css";
import { Helmet } from "react-helmet";
import { FormCita } from "../../components/Form/FormCita";
import { goTop } from "../../helpers/goTop";

const Showroom = () => {
  const [isMutedVideo, setMutedVideo] = useState(true);

  useEffect(() => {
    goTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>Showroom | Viviendas La Esperanza</title>
      </Helmet>
      <div className="contenedor-showroom__header">
        <p className="contenedor-showroom__header__text">
          <strong>¡HACE COMO FLOR!</strong><br/>¡Visitá nuestro Showroom de Casas!
        </p>
      </div>
      <div className="contenedor-showroom__form">
        <FormCita className="contenedor_form_cita" />
        <div className="contenedor_video" onClick={() => setMutedVideo(!isMutedVideo)}>
          <video
            
            className="contenedor_form_cita__video"
            autoPlay
            loop
            muted={isMutedVideo ? true : false}
            playsInline
          >
            <source
              src="/videos/showroom/video-formulario.mp4"
              type="video/mp4"
            />
          </video>
          <div
            onClick={() => setMutedVideo(!isMutedVideo)}
            className="contenedor-volumen"
          >
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
            />
            <div>{isMutedVideo && <small>¡Activá el sonido!</small>}</div>
            <span class="material-symbols-outlined">
              {isMutedVideo ? "volume_off" : "volume_up"}{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Showroom };
