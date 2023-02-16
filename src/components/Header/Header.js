import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { scroller } from "../../helpers/scroller";
import "./Header.css";

const logo = "/images/logo.svg";

const Header = () => {
  const [expand, setExpand] = useState(false);
  const [responsive, setResponsive] = useState(true);
  const [isOpenEmpresa, setOpenEmpresa] = useState(false);
  const [active, setActive] = useState("/");

  const handleClick = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  }, []);

  const resize = window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 1000) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  });

  const handleClickCabanas = () => {
    setExpand(!expand);
    scroller("#cab", 80);
  };

  const handleClickModelos = () => {
    setExpand(!expand);
    scroller("#modUna", 80);
  };

  return (
    <>
      {responsive ? (
        <header
          className={`header ${
            window.innerWidth <= 1000 ? "header-collapsed" : "none"
          }`}
        >
          <div className="logo-container">
            <Link onClick={() => setActive("/")} to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <i
            onClick={handleClick}
            className={expand ? "fas fa-times" : "fas fa-bars"}
          ></i>
          <nav
            className={`navbar-responsive ${
              window.innerWidth <= 1000 ? "collapse" : "none"
            } ${expand ? "show" : "none"}`}
          >
            <ul
              className={`items-menu ${
                window.innerWidth <= 1000 ? "items-menu-collapsed" : "none"
              }`}
            >
              <li onClick={() => setActive("/oferta")} className="nav-item">
                <NavLink
                  onClick={() => setExpand(!expand)}
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/oferta"
                >
                  <span className="oferta nav-text">¡Ofertas!</span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/cabanas")} className="nav-item">
                <NavLink
                  onClick={handleClickCabanas}
                  className={
                    active === "/cabanas" ? "nav-link--active" : "nav-link"
                  }
                  to="/"
                >
                  <span className="nav-text">Cabañas</span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/modelos")} className="nav-item">
                <NavLink
                  onClick={handleClickModelos}
                  className={
                    active === "/modelos" ? "nav-link--active" : "nav-link"
                  }
                  to="/"
                >
                  <span className="nav-text">Modelos</span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/showroom")} className="nav-item">
                <NavLink
                  onClick={() => setExpand(!expand)}
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/showroom"
                >
                  <span className="nav-text">Showroom</span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/empresa")} className="nav-item">
                <NavLink
                  onClick={() => setExpand(!expand)}
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/empresa"
                >
                  <span className="nav-text">Empresa</span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/contacto")} className="nav-item">
                <NavLink
                  onClick={() => setExpand(!expand)}
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/contacto"
                >
                  <span className="nav-text">Contacto</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header
          className={`header ${
            window.innerWidth <= 1000 ? "header-collapsed" : "none"
          }`}
        >
          <div onClick={() => setActive("/")} className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>

          <nav
            className={`navbar show ${
              window.innerWidth <= 1000 ? "collapse" : "none"
            }`}
          >
            <ul
              className={`items-menu ${
                window.innerWidth <= 1000 ? "items-menu-collapsed" : "none"
              }`}
            >
              <li onClick={() => setActive("/oferta")} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/oferta"
                >
                  <span
                    className={`oferta
                    ${active === "/oferta" ? "nav-text--active" : "nav-text"}`}
                  >
                    ¡Ofertas!
                  </span>
                </NavLink>
              </li>
              <li onClick={handleClickCabanas} className="nav-item">
                <NavLink
                  onClick={() => setActive("/cabanas")}
                  className={
                    active === "/cabanas" ? "nav-link--active" : "nav-link"
                  }
                  to="/"
                >
                  <span
                    className={
                      active === "/cabanas" ? "nav-text--active" : "nav-text"
                    }
                  >
                    Cabañas
                  </span>
                </NavLink>
              </li>
              <li onClick={handleClickModelos} className="nav-item">
                <NavLink
                  onClick={() => setActive("/modelos")}
                  className={
                    active === "/modelos" ? "nav-link--active" : "nav-link"
                  }
                  to="/"
                >
                  <span
                    className={
                      active === "/modelos" ? "nav-text--active" : "nav-text"
                    }
                  >
                    Modelos
                  </span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/showroom")} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/showroom"
                >
                  <span
                    className={
                      active === "/showroom" ? "nav-text--active" : "nav-text"
                    }
                  >
                    Showroom
                  </span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/empresa")} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/empresa"
                >
                  <span
                    className={
                      active === "/empresa" ? "nav-text--active" : "nav-text"
                    }
                  >
                    Empresa
                  </span>
                </NavLink>
              </li>
              <li onClick={() => setActive("/contacto")} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link--active" : "nav-link"
                  }
                  to="/contacto"
                >
                  <span
                    className={
                      active === "/contacto" ? "nav-text--active" : "nav-text"
                    }
                  >
                    Contacto
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
