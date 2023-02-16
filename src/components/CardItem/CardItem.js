import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { formatNumber } from "../../helpers/formatNumber";
import "./CardItem.css";
import { usePrices } from "../../hooks/usePrices";

const CardItem = ({ modelo, precio }) => {
  const precioModelo = {
    cuota: usePrices([modelo])[0][1],
  };

  return window.innerWidth <= 1024 ? (
    <div className="react-reveal1">
      <Link
        to={`/${modelo.tipo === "modelo" ? "modelo" : "cabana"}-${modelo.id}`}
        className="card-item"
      >
        <header>
          <div className="card-item__caracteristicas">
            <div className="card-item__caracteristicas__item">
              <span className="card-item__caracteristicas__item__cantidad">
                {modelo?.ambientes?.cantidadDeDormitorios}
              </span>
              <img
                className="card-item__caracteristicas__item__icono"
                src="/icons/card/dormitorio.svg"
                alt="dormitorio"
              />
            </div>
            <div className="card-item__caracteristicas__item">
              <span className="card-item__caracteristicas__item__cantidad">
                {modelo?.ambientes?.cantidadDeBanos}
              </span>
              <img
                className="card-item__caracteristicas__item__icono"
                src="/icons/card/baño.svg"
                alt="baño"
              />
            </div>
            <div className="card-item__caracteristicas__item">
              <img
                className="card-item__caracteristicas__item__icono"
                src="/icons/card/plano.svg"
                alt="plano"
              />
              <span className="card-item__caracteristicas__item__cantidad">
                {(
                  modelo?.superficies?.metrosCubiertos +
                  modelo?.superficies?.metrosSemicubiertos
                ).toFixed(2)}
                m²
              </span>
            </div>
          </div>
          <div className="card-item__title">
            <h3 className="card-item__title__text">
              {modelo?.nombre[0] + " " + modelo?.nombre[1]}
            </h3>
          </div>
        </header>
        <figure className="card-item__contenedor-imagen">
          <img
            className="card-item__contenedor-imagen__imagen"
            src={`/images/modelos/${modelo.id}/${modelo.id}-01.webp`}
            alt={modelo?.nombre}
            loading="lazy"
          />
        </figure>
        <div className="card-item__footer">
          <div className="card-item__footer__precio">
            <div className="card-item__footer__precio__leyenda">
              <span className="card-item__footer__precio__leyenda1">
                Entrega mínima
              </span>
              <span className="card-item__footer__precio__leyenda2">
                + {modelo?.cantidadDeCuotas} cuotas de{" "}
                <span className="card-item__footer__precio__leyenda2__precio">
                  ${formatNumber(precioModelo?.cuota)}
                </span>
              </span>
            </div>
          </div>
          <div className="card-item__footer__action">
            <Link
              to={`/${modelo.tipo === "modelo" ? "modelo" : "cabaña"}-${
                modelo.id
              }`}
            >
              Más info
            </Link>
          </div>
        </div>
      </Link>
    </div>
  ) : (
    <Fade bottom cascade>
      <Link
        to={`/${modelo.tipo === "modelo" ? "modelo" : "cabana"}-${modelo.id}`}
        className="card-item"
      >
        <header>
          <div className="card-item__caracteristicas">
            <div className="card-item__caracteristicas__item">
              <span className="card-item__caracteristicas__item__cantidad">
                {modelo?.ambientes?.cantidadDeDormitorios}
              </span>
              <img
                className="card-item__caracteristicas__item__icono"
                src="/icons/card/dormitorio.svg"
                alt="dormitorio"
              />
            </div>
            <div className="card-item__caracteristicas__item">
              <span className="card-item__caracteristicas__item__cantidad">
                {modelo?.ambientes?.cantidadDeBanos}
              </span>
              <img
                className="card-item__caracteristicas__item__icono"
                src="/icons/card/baño.svg"
                alt="baño"
              />
            </div>
            <div className="card-item__caracteristicas__item">
              <img
                className="card-item__caracteristicas__item__icono"
                src="/icons/card/plano.svg"
                alt="plano"
              />
              <span className="card-item__caracteristicas__item__cantidad">
                {(
                  modelo?.superficies?.metrosCubiertos +
                  modelo?.superficies?.metrosSemicubiertos
                ).toFixed(2)}
                m²
              </span>
            </div>
          </div>
          <div className="card-item__title">
            <h3 className="card-item__title__text">
              {modelo?.nombre[0] + " " + modelo?.nombre[1]}
            </h3>
          </div>
        </header>
        <figure className="card-item__contenedor-imagen">
          <img
            className="card-item__contenedor-imagen__imagen"
            src={`/images/modelos/${modelo.id}/${modelo.id}-01.webp`}
            alt={modelo?.nombre}
            loading="lazy"
          />
        </figure>
        <div className="card-item__footer">
          <div className="card-item__footer__precio">
            <div className="card-item__footer__precio__leyenda">
              <span className="card-item__footer__precio__leyenda1">
                Entrega mínima
              </span>
              <span className="card-item__footer__precio__leyenda2">
                + {modelo?.cantidadDeCuotas} cuotas de{" "}
                <span className="card-item__footer__precio__leyenda2__precio">
                  ${formatNumber(precioModelo?.cuota)}
                </span>
              </span>
            </div>
          </div>
          <div className="card-item__footer__action">
            <Link
              to={`/${modelo.tipo === "modelo" ? "modelo" : "cabaña"}-${
                modelo.id
              }`}
            >
              Más info
            </Link>
          </div>
        </div>
      </Link>
    </Fade>
  );
};

export default CardItem;
