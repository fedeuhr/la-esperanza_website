import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { goTop } from "../../helpers/goTop";
import modelosJSON from "../../data/Products/viviendas.json";
import "./Modelo.css";
import moment from "moment";
import { Layout } from "../../components/Layout/Layout";
import { formatNumber } from "../../helpers/formatNumber";
import Fancybox from "../../components/Fancybox/Fancybox";
import { Carousel } from "react-responsive-carousel";
import { usePrices } from "../../hooks/usePrices";
import { FormContacto } from "../../components/Form/FormContacto";
moment().format();

const Modelo = () => {
  const { modelo } = useParams();
  const [modeloData, setModeloData] = useState();
  const preciosModelo = {
    cuota: usePrices(
      modelosJSON.filter((modeloFilter) => modeloFilter.id == modelo)
    )[0][0],
    entrega: usePrices(
      modelosJSON.filter((modeloFilter) => modeloFilter.id == modelo)
    )[0][1],
  };
  const [precioModelo, setPrecioModelo] = useState({});
  const [isLoading, setLoading] = useState(modeloData ? false : true);
  const endMonth = moment().endOf("month").format("DD/MM/yyyy");

  useEffect(() => {
    setPrecioModelo(preciosModelo);
  }, [modeloData]);

  useEffect(() => {
    goTop();
  }, []);

  useEffect(() => {
    setModeloData(
      () => modelosJSON.filter((modeloData) => modeloData.id == modelo)[0]
    );
  }, [modelo]);

  return (
    <>
      <Helmet>
        <title>
          {modeloData?.nombre[0] + " " + modeloData?.nombre[1]} | Viviendas La
          Esperanza
        </title>
      </Helmet>
      <Layout>
        <div className="contenedor-modelo__main">
          <div className="contenedor-modelo__main__titulo">
            <h1 className="contenedor-modelo__main__titulo__text">
              <small>{modeloData?.nombre[0]}</small>
              <br />
              <strong>{modeloData?.nombre[1]}</strong>
            </h1>
          </div>
          <div className="contenedor-modelo__main__precio">
            <div className="contenedor-modelo__main__precio__item">
              <small>
                Entrega de
                <br />
              </small>
              <strong>$ {formatNumber(precioModelo?.cuota)}</strong>
            </div>
            <div className="contenedor-modelo__main__precio__item">
              <small>
                + {modeloData?.cantidadDeCuotas} cuotas de
                <br />
              </small>
              <strong>$ {formatNumber(precioModelo?.entrega)}</strong>
            </div>
            <div className="contenedor-modelo__main__precio__item">
              <small>
                * Válido hasta el
                <br />
                &nbsp;&nbsp;&nbsp;{endMonth}
              </small>
            </div>
          </div>
        </div>
        <div className="contenedor-modelo__imagenes__grid">
          {window.innerWidth <= 600 ? (
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
              <img
                data-fancybox="gallery"
                className="contenedor-modelo__imagenes__grid__images-lateral__image-contenedor__image"
                src={`/images/modelos/${modeloData?.nombre[1]}/${modeloData?.nombre[1]}-01.webp`}
                alt={modeloData?.nombre[0] + " " + modeloData?.nombre[1]}
              />
              <img
                data-fancybox="gallery"
                className="contenedor-modelo__imagenes__grid__images-lateral__image-contenedor__image"
                src={`/images/modelos/${modeloData?.nombre[1]}/${modeloData?.nombre[1]}-02.webp`}
                alt={modeloData?.nombre[0] + " " + modeloData?.nombre[1]}
              />
              <img
                data-fancybox="gallery"
                className="contenedor-modelo__imagenes__grid__images-lateral__image-contenedor__image"
                src={`/images/modelos/${modeloData?.nombre[1]}/${modeloData?.nombre[1]}-03.webp`}
                alt={modeloData?.nombre[0] + " " + modeloData?.nombre[1]}
              />
              <img
                data-fancybox="gallery"
                className="contenedor-modelo__imagenes__grid__images-lateral__image-contenedor__image"
                src={`/images/modelos/${modeloData?.nombre[1]}/${modeloData?.nombre[1]}-04.webp`}
                alt={modeloData?.nombre[0] + " " + modeloData?.nombre[1]}
              />
              <img
                data-fancybox="gallery"
                className="contenedor-modelo__imagenes__grid__images-lateral__image-contenedor__image"
                src={`/images/modelos/${modeloData?.nombre[1]}/${modeloData?.nombre[1]}-05.webp`}
                alt={modeloData?.nombre[0] + " " + modeloData?.nombre[1]}
              />
            </Carousel>
          ) : (
            <Fancybox>
              <figure className="contenedor-modelo__imagenes__grid__principal">
                <img
                  data-fancybox="gallery"
                  className="contenedor-modelo__imagenes__grid__principal__image"
                  src={`/images/modelos/${modeloData?.nombre[1]}/${modeloData?.nombre[1]}-01.webp`}
                  alt={modeloData?.nombre[0] + " " + modeloData?.nombre[1]}
                />
              </figure>
              {modeloData?.cantidadDeImagenes?.map((imagen, index) => {
                return (
                  index !== 0 && (
                    <figure className="contenedor-modelo__imagenes__grid__images-lateral__image-contenedor">
                      <img
                        data-fancybox="gallery"
                        className="contenedor-modelo__imagenes__grid__images-lateral__image-contenedor__image"
                        src={`/images/modelos/${modeloData?.nombre[1]}/${
                          modeloData?.nombre[1]
                        }-0${index + 1}.webp`}
                        alt={
                          modeloData?.nombre[0] + " " + modeloData?.nombre[1]
                        }
                      />
                    </figure>
                  )
                );
              })}
            </Fancybox>
          )}
        </div>
        <div className="contenedor-modelo__main__detalles">
          <div className="contenedor-modelo__main__detalles__item">
            <h3 className="contenedor-modelo__main__detalles__item__titulo">
              Sobre el modelo
            </h3>
            <p className="contenedor-modelo__main__detalles__item__parrafo">
              {modeloData?.descripcion}
            </p>
          </div>
          <div className="contenedor-modelo__main__detalles__item">
            <h3 className="contenedor-modelo__main__detalles__item__titulo">
              Superficies
            </h3>
            {modeloData?.superficies?.metrosSemicubiertos === 0 ? (
              <span className="contenedor-modelo__main__detalles__item__descripcion">
                Metros cubiertos {modeloData?.superficies?.metrosCubiertos}
                m²
                <br />
                <span className="contenedor-modelo__main__detalles__item__descripcion--resaltado">
                  Total a construir{" "}
                  {modeloData?.superficies?.metrosCubiertos +
                    modeloData?.superficies?.metrosSemicubiertos}
                  m²
                </span>
              </span>
            ) : (
              <span className="contenedor-modelo__main__detalles__item__descripcion">
                Metros cubiertos {modeloData?.superficies?.metrosCubiertos}
                m² | Metros semicubiertos{" "}
                {modeloData?.superficies?.metrosSemicubiertos}m²
                <br />
                <span className="contenedor-modelo__main__detalles__item__descripcion--resaltado">
                  Total a construir{" "}
                  {(
                    modeloData?.superficies?.metrosCubiertos +
                    modeloData?.superficies?.metrosSemicubiertos
                  ).toFixed(2)}
                  m²
                </span>
              </span>
            )}

            <div className="contenedor-modelo__main__detalles__item__ambientes">
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Dormitorio.svg"
                  alt="Dormitiorio"
                />
                {modeloData?.ambientes?.cantidadDeDormitorios === 1 ? (
                  <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                    {modeloData?.ambientes?.cantidadDeDormitorios} Dormitorio
                  </span>
                ) : (
                  <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                    {modeloData?.ambientes?.cantidadDeDormitorios} Dormitorios
                  </span>
                )}
              </div>
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Baño.svg"
                  alt="Baño"
                />
                {modeloData?.ambientes?.cantidadDeBanos === 1 ? (
                  <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                    {modeloData?.ambientes?.cantidadDeBanos} Baño
                  </span>
                ) : (
                  <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                    {modeloData?.ambientes?.cantidadDeBanos} Baños
                  </span>
                )}
              </div>
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Cocina.svg"
                  alt="Cocina + Comedor + Estar"
                />
                {modeloData?.ambientes?.cocina && (
                  <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                    {modeloData?.ambientes?.cocina && "Cocina"}{" "}
                    {modeloData?.ambientes?.comedor && "- Comedor"}
                    {modeloData?.ambientes?.estar && " - Estar"}
                  </span>
                )}
              </div>
              {modeloData?.ambientes?.pergola && (
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
              )}
              <div className="contenedor-modelo__main__detalles__item__ambientes__item">
                <img
                  className="contenedor-modelo__main__detalles__item__ambientes__item__icon"
                  src="/icons/Icono_Plano.svg"
                  alt="Plano"
                />
                <span className="contenedor-modelo__main__detalles__item__ambientes__item__text">
                  {(
                    modeloData?.superficies?.metrosCubiertos +
                    modeloData?.superficies?.metrosSemicubiertos
                  ).toFixed(2)}
                  m²
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <FormContacto />
    </>
  );
};

export { Modelo };
