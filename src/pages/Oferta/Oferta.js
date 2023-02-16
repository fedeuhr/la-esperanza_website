import React from "react";
import "./Oferta.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import moment from "moment";

import { goTop } from "../../helpers/goTop";
import Fancybox from "../../components/Fancybox/Fancybox";
import { Carousel } from "react-responsive-carousel";

import CuentaAtras from "../../components/CuentaAtras/CuentaAtras";

moment().format();

const Oferta = () => {
  const endMonth = moment().endOf("month").format("DD/MM/yyyy");

  useEffect(() => {
    goTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>Oferta | Viviendas La Esperanza</title>
      </Helmet>
      <Layout>
        <div className="contenedor-oferta">
          <div className="contenedor-oferta__header">
            <div className="contenedor-oferta__header__titulo">
              <strong className="contenedor-oferta__header__titulo__text">
                ¡Oferta del mes!
              </strong>
            </div>
          </div>
          <CuentaAtras top="4.5vw" right="2px" />
        </div>
        <div className="contenedor-oferta__contenido">
          <span className="contenedor-oferta__contendo__text">
            <small>
              ¡Aprovechá este
              <br />
            </small>
            <strong>MODELO EXCLUSIVO!</strong>
          </span>
          <img
            className="contenedor-oferta__contenido__llama"
            src="/assets/Llama.svg"
            alt="llama"
          />
          {window.innerWidth <= 600 ? (
            <>
              <Carousel
                showArrows={false}
                emulateTouch={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                swipeable={true}
                useKeyboardArrows={true}
                margin={0}
                padding={0}
                autoPlay={true}
                interval={7000}
                transitionTime={800}
              >
                <figure className="contenedor-oferta__contenido__contenedor-image__principal">
                  <img
                    data-fancybox="gallery"
                    className="contenedor-oferta__contenido__contenedor-image__image"
                    src="/images/modelos/oferta/oferta-01.jpg"
                    alt="Modelo 3018"
                  />
                </figure>
                <figure className="contenedor-oferta__contenido__contenedor-image3">
                  <img
                    data-fancybox="gallery"
                    className="contenedor-oferta__contenido__contenedor-image__image3"
                    src="/images/modelos/oferta/oferta-02.jpg"
                    alt="Modelo 3018"
                  />
                </figure>
              </Carousel>
              <div className="contenedor-oferta__contenido__content__card-precio">
                <small>Precio de contado</small>
                <strong>$&nbsp;2.655.000</strong>
                <small>* Válido hasta el {endMonth}</small>
              </div>
            </>
          ) : (
            <Fancybox>
              <figure className="contenedor-oferta__contenido__contenedor-image__principal">
                <img
                  data-fancybox="gallery"
                  className="contenedor-oferta__contenido__contenedor-image__image"
                  src="/images/modelos/oferta/oferta-01.jpg"
                  alt="Modelo 3018"
                />
              </figure>
              <div className="contenedor-oferta__contenido__content__card-precio">
                <small>Precio de contado</small>
                <strong>$&nbsp;2.655.000</strong>
                <small>* Válido hasta el {endMonth}</small>
              </div>
              <figure className="contenedor-oferta__contenido__contenedor-image3">
                <img
                  data-fancybox="gallery"
                  className="contenedor-oferta__contenido__contenedor-image__image3"
                  src="/images/modelos/oferta/oferta-02.jpg"
                  alt="Modelo 3018"
                />
              </figure>
            </Fancybox>
          )}
        </div>
        <div
          style={{ marginTop: "40px" }}
          className="contenedor-oferta__contenido__content"
        >
          <div className="contenedor-oferta__contenido__content__caracteristicas">
            <h3 className="contenedor-oferta__contenido__content__caracteristicas__titulo">
              Sobre el modelo
            </h3>
            <p className="contenedor-oferta__contenido__content__caracteristicas__parrafo">
              Modelo exclusivo, minimalista. Su exterior moderno presenta una
              pérgola, diseñada con elegantes listones de madera. En su interior
              se encuenra un funcional estar comedor cocina, rodeado por
              ventanales que permiten el ingreso de gran luminosidad. A
              continuación se encuentran dos dormitorios, separados por un baño
              de uso común.
            </p>
          </div>
          <div>
            <h3 className="contenedor-oferta__contenido__content__caracteristicas__titulo">
              Superficies
            </h3>
            <span className="contenedor-oferta__contenido__content__caracteristicas__parrafo">
              Metros cubiertos 30m² | semicubiertos 15m²
              <br />
              <span className="contenedor-modelo__main__detalles__item__descripcion--resaltado">
                Total a construir 45m²
              </span>
            </span>
            <div className="contenedor-modelo__main__detalles__item__ambientes">
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Dormitorio.svg"
                  alt="Dormitiorio"
                />
                <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                  2 Dormitorios
                </span>
              </div>
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Baño.svg"
                  alt="Baño"
                />
                <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                  1 Baño
                </span>
              </div>
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Cocina.svg"
                  alt="Cocina + Comedor + Estar"
                />
                <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                  Cocina Comedor - Estar
                </span>
              </div>
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Pérgola.svg"
                  alt="Pérgola"
                />
                <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                  Pérgola
                </span>
              </div>
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Plano.svg"
                  alt="Plano"
                />
                <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                  45 m²
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { Oferta };
