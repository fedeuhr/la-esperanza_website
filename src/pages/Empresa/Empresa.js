import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { goTop } from "../../helpers/goTop";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/Layout/Layout";
import "./Empresa.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Empresa = () => {
  useEffect(() => {
    goTop();
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Helmet>
        <title>Empresa | Viviendas La Esperanza</title>
      </Helmet>
      <Layout>
        <div className="contenedor-empresa">
          <Fade big>
            <div className="contenedor-empresa__quienes-somos">
              <div className="contenedor-empresa__quienes-somos__enunciado">
                <h1 className="contenedor-empresa__quienes-somos__enunciado__titulo">
                  ¿Quiénes somos?
                </h1>
                <p className="contenedor-empresa__quienes-somos__enunciado__parrafo">
                  En Viviendas La Esperanza somos un gran equipo conformado por
                  profesionales arquitectos, constructores y asesores
                  comerciales. Trabajamos todos los dias para vos, ofreciéndote
                  la mejor opción de construcción en seco, destacando sus
                  beneficios económicos y sus innumerables ventajas con respecto
                  a la vivienda tradicional.
                  <br />
                  <br />
                  Nos insertamos en el mercado inmobiliario cordobés, ofreciendo
                  un servicio de excelente calidad, con planes de financiación a
                  medida y diseños exclusivos o personalizados; que se adaptan a
                  las necesidades de cada cliente. Este año cumplimos 25 años de
                  trayectoria en el rubro, consolidándonos como una empresa
                  líder de construcción en seco. Recorremos cada punto del país,
                  acompañando los proyectos de miles de familias argentinas. ¡Te
                  invitamos a conocernos!
                </p>
              </div>
              <figure className="contenedor-empresa__quienes-somos__image__contenedor">
                <img
                  className="contenedor-empresa__quienes-somos__image__contenedor__image"
                  src="/images/quienes-somos/quienes-somos.webp"
                  alt=""
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="contenedor-empresa__quienes-somos__seccion2">
              <h3 className="contenedor-empresa__quienes-somos__seccion2__titulo">
                ¿Por qué elegirnos?
              </h3>

              <div className="contenedor-empresa__quienes-somos__seccion2__atributos">
                <Fade bottom>
                  <div className="contenedor-empresa__quienes-somos__seccion2__atributos__item">
                    <img
                      className="contenedor-empresa__quienes-somos__seccion2__atributos__item__image"
                      src="/icons/quienes-somos/Icono_Financiación.svg"
                      alt="Financiación"
                      loading="lazy"
                    />
                    <div className="alignItem">
                      <strong className="contenedor-empresa__quienes-somos__seccion2__atributos__item__titulo">
                        Financiación
                      </strong>
                      <p className="contenedor-empresa__quienes-somos__seccion2__atributos__item__descripcion">
                        Trabajamos con financiación propia sin intermediarios ni
                        entidades financieras, esto hace que sea fácil y seguro
                        acceder a nuestros planes de pago personalizados.
                      </p>
                    </div>
                  </div>
                  <div className="contenedor-empresa__quienes-somos__seccion2__atributos__item">
                    <img
                      className="contenedor-empresa__quienes-somos__seccion2__atributos__item__image"
                      src="/icons/quienes-somos/Icono_Calidad.svg"
                      alt="Calidad"
                      loading="lazy"
                    />
                    <div className="alignItem">
                      <strong className="contenedor-empresa__quienes-somos__seccion2__atributos__item__titulo">
                        Calidad
                      </strong>
                      <p className="contenedor-empresa__quienes-somos__seccion2__atributos__item__descripcion">
                        Tenemos nuestra propia fábrica con materiales de primera
                        marca, brindando la mejor opción en cuanto a seguridad y
                        eficacia en nuestras construcciones.
                      </p>
                    </div>
                  </div>
                  <div className="contenedor-empresa__quienes-somos__seccion2__atributos__item">
                    <img
                      className="contenedor-empresa__quienes-somos__seccion2__atributos__item__image"
                      src="/icons/quienes-somos/Icono_Tiempo.svg"
                      alt="Tiempo"
                      loading="lazy"
                    />
                    <div className="alignItem">
                      <strong className="contenedor-empresa__quienes-somos__seccion2__atributos__item__titulo">
                        Tiempo
                      </strong>
                      <p className="contenedor-empresa__quienes-somos__seccion2__atributos__item__descripcion">
                        Nos encargamos de que puedas disfrutar de tu casa en un
                        tiempo prudencial. Nuestro plazo estimado de entrega es
                        de 60 a 90 días según el proyecto que hayas elegido.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="contenedor-empresa__quienes-somos__seccion3">
              <div
                className={
                  window.innerWidth <= 600
                    ? "display alignCenter"
                    : "displayNone"
                }
              >
                <h1 className="contenedor-empresa__quienes-somos__seccion3__enunciado__titulo">
                  Sistema constructivo
                </h1>
                <h3 className="contenedor-empresa__quienes-somos__seccion3__enunciado__subtitulo">
                  Construcción inteligente
                </h3>
              </div>

              <figure className="contenedor-empresa__quienes-somos__seccion3__contenedor-imagen">
                <img
                  className="contenedor-empresa__quienes-somos__seccion3__contenedor-imagen__imagen"
                  src="/images/quienes-somos/WoodFrame.webp"
                  alt=""
                  loading="lazy"
                />
              </figure>
              <div className="contenedor-empresa__quienes-somos__seccion3__enunciado">
                <h1
                  className={
                    window.innerWidth >= 600
                      ? "contenedor-empresa__quienes-somos__seccion3__enunciado__titulo display"
                      : "displayNone"
                  }
                >
                  Sistema constructivo
                </h1>
                <h3
                  className={
                    window.innerWidth >= 600
                      ? "contenedor-empresa__quienes-somos__seccion3__enunciado__subtitulo display"
                      : "displayNone"
                  }
                >
                  Construcción inteligente
                </h3>
                <p className="contenedor-empresa__quienes-somos__seccion3__enunciado__parrafo">
                  La innovación en el diseño y construcción de cada vivienda es
                  nuestro objetivo principal, acompañado siempre de la máxima
                  eficiencia, valiéndonos del Sistema de Construcción en Seco
                  Wood Frame.
                  <br />
                  <br /> El Wood frame es un sistema que revolucionó el mundo de
                  la arquitectura. Conformado por una estructura entramada de
                  madera que funciona como soporte y envolvente de toda la
                  vivienda, es ideal para obras nuevas, ampliaciones o todo tipo
                  de intervención.
                </p>
              </div>
            </div>
            <div className="contenedor-empresa__quienes-somos__seccion4">
              <h3 className="contenedor-empresa__quienes-somos__seccion4__titulo">
                Ventajas constructivas
              </h3>
              <div className="contenedor-empresa__quienes-somos__seccion4__atributos">
                <Fade bottom>
                  <div className="contenedor-empresa__quienes-somos__seccion4__atributos__item">
                    <img
                      className="contenedor-empresa__quienes-somos__seccion4__atributos__item__image"
                      src="/icons/quienes-somos/Icono_Ecología.svg"
                      alt="Ecología"
                      loading="lazy"
                    />
                    <div className="alignItem">
                      <strong className="contenedor-empresa__quienes-somos__seccion4__atributos__item__titulo">
                        Ecología
                      </strong>
                      <p className="contenedor-empresa__quienes-somos__seccion4__atributos__item__descripcion">
                        El Wood Frame, al ser sustentable, disminuye la
                        generación de residuos y no utiliza madera de bosques
                        nativos.
                      </p>
                    </div>
                  </div>
                  <div className="contenedor-empresa__quienes-somos__seccion4__atributos__item">
                    <img
                      className="contenedor-empresa__quienes-somos__seccion4__atributos__item__image"
                      src="/icons/quienes-somos/Icono_Seguridad.svg"
                      alt="Seguridad"
                      loading="lazy"
                    />
                    <div className="alignItem">
                      <strong className="contenedor-empresa__quienes-somos__seccion4__atributos__item__titulo">
                        Seguridad
                      </strong>
                      <p className="contenedor-empresa__quienes-somos__seccion4__atributos__item__descripcion">
                        Preparadas para soportar diversas condiciones
                        climáticas. Contiene membranas internas para reforzar.
                      </p>
                    </div>
                  </div>
                  <div className="contenedor-empresa__quienes-somos__seccion4__atributos__item">
                    <img
                      className="contenedor-empresa__quienes-somos__seccion4__atributos__item__image"
                      src="/icons/quienes-somos/Icono_Energía.svg"
                      alt="Financiación"
                      loading="lazy"
                    />
                    <div className="alignItem">
                      <strong className="contenedor-empresa__quienes-somos__seccion4__atributos__item__titulo">
                        Energía
                      </strong>
                      <p className="contenedor-empresa__quienes-somos__seccion4__atributos__item__descripcion">
                        Menor impacto ambiental, debido al ahorro de energía
                        tanto en la construcción como en su final de obra.
                      </p>
                    </div>
                  </div>
                  <div className="contenedor-empresa__quienes-somos__seccion4__atributos__item">
                    <img
                      className="contenedor-empresa__quienes-somos__seccion4__atributos__item__image"
                      src="/icons/quienes-somos/Icono_Durabilidad.svg"
                      alt="Durabilidad"
                      loading="lazy"
                    />
                    <div className="alignItem">
                      <strong className="contenedor-empresa__quienes-somos__seccion4__atributos__item__titulo">
                        Durabilidad
                      </strong>
                      <p className="contenedor-empresa__quienes-somos__seccion4__atributos__item__descripcion">
                        Con un mantenimiento adecuado como cualquier
                        construcción, se logra maximizar su durabilidad.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="contenedor-swiper">
              <h3 className="contenedor-empresa__quienes-somos__seccion5__titulo">
                Proyectos terminados
              </h3>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                initialSlide={2}
                loop={true}
                slidesPerView={window.innerWidth < 768 ? 1 : 2}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={true}
                pagination={{ pagination, clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                loading="lazy"
              >
                <SwiperSlide>
                  <img
                    src="/images/quienes-somos/obra1.webp"
                    alt=""
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/quienes-somos/obra2.webp"
                    alt=""
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/quienes-somos/obra3.webp"
                    alt=""
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/quienes-somos/obra4.webp"
                    alt=""
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/quienes-somos/obra5.webp"
                    alt=""
                    loading="lazy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/quienes-somos/obra6.webp"
                    alt=""
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </Fade>
        </div>
      </Layout>
    </>
  );
};

export { Empresa };
