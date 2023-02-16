import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ itemsMenu }) => {
  const [active, setactive] = useState("Home");

  const [dataBanner, setDataBanner] = useState({
    banner: "images/bannersMenu/banner-01.webp",
    link: "/eco-steel",
    leyenda: "4 productos",
  });
  const handleBannerMenu = (title) => {
    switch (title) {
      case "Eco Steel":
        setDataBanner({
          banner: "images/bannersMenu/banner-01.webp",
          link: "/eco-steel",
          leyenda: "4 productos",
        });
        break;
      case "Luxury Steel":
        setDataBanner({
          banner: "images/bannersMenu/banner-02.webp",
          link: "/luxury-steel",
          leyenda: "2 productos",
        });
        break;
      case "Palace Steel":
        setDataBanner({
          banner: "images/bannersMenu/banner-03.webp",
          link: "/palace-steel",
          leyenda: "1 producto",
        });
        break;

      default:
        break;
    }
  };

  const handleScrollModelos = () => {
    setTimeout(() => {
      let feed = document.querySelector(".contenedor-feed");
      if (feed) {
        let alturaFeed = feed.offsetTop;
        window.scroll({
          top: alturaFeed - 100,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <nav className="nav">
      <ul className="nav__list-items">
        {itemsMenu.map((itemMenu) => {
          return itemMenu.title !== "Modelos" ? (
            <li
              className="nav__list-items__item-menu"
              onClick={() => setactive(itemMenu.title)}
            >
              {!itemMenu.subMenu ? (
                <Link
                  className="nav__list-items__item-menu__item-link"
                  to={itemMenu.link}
                >
                  <span
                    className={`nav__list-items__item-menu__item-link__title ${
                      active === itemMenu.title &&
                      "nav__list-items__item-menu--active"
                    }`}
                  >
                    {itemMenu.title}
                  </span>
                  {itemMenu.subMenu && (
                    <span class="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                  )}
                </Link>
              ) : (
                <div className="nav__list-items__item-menu__item-link">
                  {itemMenu.title}
                  {itemMenu.subMenu && (
                    <span class="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                  )}
                </div>
              )}

              {itemMenu.subMenu && (
                <div className="nav__list-items__item-menu__submenu">
                  <Link
                    to={dataBanner.link}
                    className="nav__list-items__item-menu__submenu__banner"
                  >
                    <span className="nav__list-items__item-menu__submenu__leyenda-banner">
                      {dataBanner.leyenda}
                    </span>
                    <img
                      className="nav__list-items__item-menu__submenu__image-banner"
                      style={{ width: "416px", "border-radius": "5px" }}
                      src={dataBanner.banner}
                      alt=""
                    />
                  </Link>
                  <ul className="nav__list-items__item-menu__items-submenu">
                    {itemMenu.subMenu.map((itemSubmenu) => (
                      <li
                        onMouseEnter={() => handleBannerMenu(itemSubmenu.title)}
                        onClick={() => setactive(itemSubmenu.title)}
                        className={`nav__list-items__item-menu__items-sub-menu__item-submenu ${
                          active === itemSubmenu.title &&
                          "nav__list-items__item-menu__items-sub-menu__item-submenu--active"
                        }`}
                      >
                        <a
                          className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-link"
                          href="#"
                        >
                          <div className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-header">
                            <span class="material-symbols-outlined">
                              add_circle
                            </span>
                          </div>
                          <div className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-link__info">
                            <h4 className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-header__title">
                              {itemSubmenu.title}
                            </h4>
                            <span className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-description">
                              {itemSubmenu.description}
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li
              className="nav__list-items__item-menu"
              onClick={() => setactive(itemMenu.title)}
            >
              {!itemMenu.subMenu ? (
                <Link
                  to="/"
                  onClick={handleScrollModelos}
                  className="nav__list-items__item-menu__item-link"
                >
                  <span
                    className={`nav__list-items__item-menu__item-link__title ${
                      active === itemMenu.title &&
                      "nav__list-items__item-menu--active"
                    }`}
                  >
                    {itemMenu.title}
                  </span>
                  {itemMenu.subMenu && (
                    <span class="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                  )}
                </Link>
              ) : (
                <div className="nav__list-items__item-menu__item-link">
                  {itemMenu.title}
                  {itemMenu.subMenu && (
                    <span class="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                  )}
                </div>
              )}

              {itemMenu.subMenu && (
                <div className="nav__list-items__item-menu__submenu">
                  <span className="nav__list-items__item-menu__submenu__banner">
                    <span className="nav__list-items__item-menu__submenu__leyenda-banner">
                      {dataBanner.leyenda}
                    </span>
                    <img
                      className="nav__list-items__item-menu__submenu__image-banner"
                      style={{ width: "416px", "border-radius": "5px" }}
                      src={dataBanner.banner}
                      alt=""
                    />
                  </span>
                  <ul className="nav__list-items__item-menu__items-submenu">
                    {itemMenu.subMenu.map((itemSubmenu) => (
                      <li
                        onMouseEnter={() => handleBannerMenu(itemSubmenu.title)}
                        onClick={() => setactive(itemSubmenu.title)}
                        className={`nav__list-items__item-menu__items-sub-menu__item-submenu ${
                          active === itemSubmenu.title &&
                          "nav__list-items__item-menu__items-sub-menu__item-submenu--active"
                        }`}
                      >
                        <a
                          className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-link"
                          href="#"
                        >
                          <div className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-header">
                            <span class="material-symbols-outlined">
                              add_circle
                            </span>
                          </div>
                          <div className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-link__info">
                            <h4 className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-header__title">
                              {itemSubmenu.title}
                            </h4>
                            <span className="nav__list-items__item-menu__items-sub-menu__item-submenu__item-description">
                              {itemSubmenu.description}
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Nav };
