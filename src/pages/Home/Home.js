import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import { goTop } from "../../helpers/goTop";
import { Layout } from "../../components/Layout/Layout";
import feeds from "../../data/FeedContenido.json";
import modelosJSON from "../../data/Products/viviendas.json";
import "./Home.css";
import moment from "moment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { scroller } from "../../helpers/scroller";
import Feed from "../../components/Feed/Feed";
import CuentaAtras from "../../components/CuentaAtras/CuentaAtras";
import CardItem from "../../components/CardItem/CardItem";
moment().format();

const Home = () => {
  const [modelos, setModelos] = useState(modelosJSON);

  useEffect(() => {
    goTop();
  }, []);

  const [timeLeft, setTimeLeft] = useState();
  const end = moment().endOf("day");
  const endMonth = moment().endOf("month").format("DD/MM/yyyy");

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(moment(end.diff(moment())).format("HH:mm:ss"));
    }, 1000);
  }, []);

  const handleClickSistemaConstructivo = () => {
    scroller(".contenedor-empresa__quienes-somos__seccion3", 0);
  };

  const handleClickCabanas = () => {
    scroller("#cab", 80);
  };


  return (
    <>
      <Helmet>
        <title>Viviendas La Esperanza</title>
      </Helmet>
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
        className="mainSlider"
      >
        <div className="slider_item">
          <Link onClick={handleClickCabanas} to="/" className="btnSlider">
            <video autoPlay loop muted playsInline loading="lazy">
              <source
                src={
                  window.innerWidth <= 820
                    ? "/slider/BannerLE_Cabañas_mobile.mp4"
                    : "/slider/BannerLE_Cabañas_web.mp4"
                }
                type="video/mp4"
                loading="lazy"
              />
            </video>
          </Link>
        </div>
        <div className="slider_item">
          <Link to="/showroom" className="btnSlider">
            <video autoPlay loop muted playsInline loading="lazy">
              <source
                src={
                  window.innerWidth <= 820
                    ? "/slider/BannerLE_Showroom_mobile.mp4"
                    : "/slider/BannerLE_Showroom_web.mp4"
                }
                type="video/mp4"
                loading="lazy"
              />
            </video>
          </Link>
        </div>

      </Carousel>
      <Layout>
        <main className="contenedor-header">
          <Fade bottom cascade>
            <div
              style={{ padding: "1.17vw 0" }}
              className="contenedor-header__titulo1"
            >
              <span
                style={{
                  "text-align": "center",
                  fontWeight: 300,
                }}
                className="contenedor-header__titulo1__text"
              >
                ¡No te pierdas esta
                <br />
                <strong>oportunidad única!</strong>
              </span>
            </div>
            <CuentaAtras animation="false" top="2.5vw" right="1px" />
          </Fade>
          <Fade bottom cascade>
            <Link className="contenedor-header__contendo__link" to="/oferta">
              <div className="contenedor-header__contendo">
                <span className="contenedor-header__contendo__text">
                  <small>
                    ¡Aprovecha nuestra
                    <br />
                  </small>
                  <strong>OFERTA DEL MES!</strong>
                </span>
                <Fade bottom cascade>
                  <img
                    className="contenedor-header__contenido__llama"
                    src="/assets/Llama.svg"
                    alt="llama"
                  />
                </Fade>
                <figure className="contenedor-header__contenido__contenedor-image">
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
                    className="mainSlider"
                  >
                    <img
                      className="contenedor-header__contenido__contenedor-image__image"
                      src="/images/modelos/oferta/oferta-01.jpg"
                      alt="Oferta 1"
                    />
                    <img
                      className="contenedor-header__contenido__contenedor-image__image"
                      src="/images/modelos/oferta/oferta-02.jpg"
                      alt="Oferta 2"
                    />
                  </Carousel>
                </figure>
                <div className="contenedor-header__contenido__descripcion">
                  <div className="contenedor-header__contenido__descripcion__precio">
                    <span>Precio de contado</span>
                    <strong>$&nbsp;2.655.000</strong>
                    <small>*Válido hasta el {endMonth}</small>
                  </div>
                  <div className="contenedor-header__contenido__descripcion__action">
                    <Link to="/contacto">Obtené asesoramiento</Link>
                  </div>
                </div>
              </div>
            </Link>
          </Fade>
        </main>
        <Fade bottom cascade>
          <div className="contenedor-header">
            <div
              style={{ borderRadius: "1.6vw", padding: "1vw 0" }}
              className="contenedor-header__titulo2"
            >
              <span className="contenedor-header__titulo2__text">
                ¡Conocé nuestros{window.innerWidth <= 480 ? <br /> : " "}
                <strong>nuevos modelos!</strong>
              </span>
            </div>
            <div className="contenedor-header__descripcion">
              <span className="contenedor-header__descripcion__text">
                ¡Diseñados por los mejores arquitectos
                <br /> del país, <strong>especialmente para vos!</strong>
              </span>
            </div>
          </div>
        </Fade>
        {feeds.map((feed, key) => {
          return (
            <Feed
              myKey={key}
              titulo={feed.titulo}
              leyenda={feed.leyenda}
              leyendaExpansion={feed.leyendaExpansion}
              filtro={feed.filtro}
              id={feed.id}
            >
              {modelos.map((modelo, key) => {
                return (
                  modelo.tipo === feed.filtro[0] &&
                  (feed.filtro[1]
                    ? modelo.cantidadDePlantas === feed.filtro[1]
                    : modelo.tipo === feed.filtro[0]) && (
                    <CardItem key={key} modelo={modelo} />
                  )
                );
              })}
            </Feed>
          );
        })}
      </Layout>
      <Link onClick={handleClickSistemaConstructivo} to="/empresa">
        <video
          className="video__construccion"
          autoPlay
          loop
          width="100%"
          muted
          playsInline
          loading="lazy"
        >
          <source
            loading="lazy"
            src={
              window.innerWidth <= 1024
                ? "/videos/home/video-construccion_mobile.mp4"
                : "/videos/home/video-construccion.mp4"
            }
            type="video/mp4"
          />
        </video>
      </Link>
    </>
  );
};

export { Home };
