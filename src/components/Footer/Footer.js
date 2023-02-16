import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const today = new Date(Date.now());
    setCurrentYear(today.getFullYear());
  }, []);

  return (
    <footer className="contenedor-footer">
      <div className="contenedor-footer__datos">
        <div className="contenedor-footer__contacto">
          <div>
            <h4>¡Contactanos!</h4>
            <div className="contenedor-footer__contacto__item">
              <a href="#">
                <img
                  title="Llamada teléfonica"
                  src="/icons/footer/telefono.svg"
                  alt="teléfono"
                />
                0800 888 0168
              </a>
            </div>
            <div className="contenedor-footer__contacto__item">
              <a
                href="#"
                target="blank"
              >
                <img
                  title="WhatsApp"
                  src="/icons/footer/whatsaap.svg"
                  alt="whatsaap"
                />
                <span>+54 9 11 582-64506</span>
              </a>
            </div>
          </div>
        </div>
        <div className="contenedor-footer__horarios">
          <div>
            <h4>Horarios</h4>
            <div className="contenedor-footer__horarios__item">
              <strong>Buenos Aires</strong>
              <span>Lunes a domingo • 10:00 a 18:00</span>
            </div>
            <br />
            <div className="contenedor-footer__horarios__item">
              <strong>Córdoba</strong>
              <span>Lunes a viernes • 10:00 a 18:00</span>
              <span>Sábados • 9:00 a 15:00</span>
            </div>
          </div>
        </div>
        <div className="contenedor-footer__redes-sociales">
          <div>
            <h4>Redes sociales</h4>
            <div className="contenedor-footer__redes-sociales__items">
              <div className="contenedor-footer__redes-sociales__item">
                <a
                  title="Instagram"
                  href="#"
                  target="blank"
                >
                  <img src="/icons/footer/instagram.svg" alt="" />
                </a>
              </div>
              <div className="contenedor-footer__redes-sociales__item">
                <a
                  title="Facebook"
                  href="#"
                  target="blank"
                >
                  <img src="/icons/footer/facebook.svg" alt="" />
                </a>
              </div>
              <div className="contenedor-footer__redes-sociales__item">
                <a
                  title="TikTok"
                  href="#"
                  target="blank"
                >
                  <img src="/icons/footer/tiktok.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="contenedor-footer__redes-sociales__ubicaciones">
              <div className="contenedor-footer__contacto__item">
                <a href="#" target="blank">
                  <img
                    title="Google Maps"
                    src="/icons/footer/ubicacion.svg"
                    alt="whatsaap"
                  />
                  <span>
                    {" "}
                    Calle 47, Polo Maderero
                    <br /> Platanos, Buenos Aires
                  </span>
                </a>
              </div>
              <div className="contenedor-footer__contacto__item">
                <a href="https://goo.gl/maps/F1rU2C91N1LAHdmf6" target="blank">
                  <img
                    title="Google Maps"
                    src="/icons/footer/ubicacion.svg"
                    alt="whatsaap"
                  />
                  <span>
                    Gral. Manuel Savio 4880, Parque
                    <br />
                    Industrial Ferreyra, Córdoba
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-footer__derechos">
        <span>La Esperanza {currentYear} © Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
