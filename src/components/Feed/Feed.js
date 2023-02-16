import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./Feed.css";
import Modelos from "../../data/Products/viviendas.json";
import { useState } from "react";

const Feed = ({
  myKey,
  children,
  titulo,
  leyenda,
  leyendaExpansion,
  filtro,
  id,
}) => {
  const [isExpand, setExpand] = useState(false);
  const [isExpandable, setExpandible] = useState(false);

  useEffect(() => {
    const cantidadElementos = children.filter((child) =>
      child.props ? child.props : null
    );
    if (cantidadElementos.length <= 3) {
      setExpandible(false);
    } else {
      setExpandible(true);
    }
  }, []);

  return (
    <div className="contenedor-feed" id={id}>
      <header className="contenedor-feed__titular">
        <div className="contenedor-feed__titular__titulo">
          <small>{titulo[0]}</small>
          <strong>{titulo[1]}</strong>
        </div>
        <div className="contenedor-feed__titular__descripcion">
          <small>{leyenda}</small>
        </div>
      </header>
      <div
        className={`contenedor-feed__contenido ${
          isExpand && "contenedor-feed__contenido--show"
        }`}
      >
        {children}
      </div>
      <div
        onClick={() => setExpand(!isExpand)}
        className="contenedor-feed__expansion"
      >
        {isExpandable &&
          (!isExpand ? (
            <>
              <span>{leyendaExpansion[0]}</span>
              <img src="/icons/expandir.svg" alt="expandir" />
            </>
          ) : (
            <>
              <span>{leyendaExpansion[1]}</span>
              <img
                style={{ rotate: "180deg" }}
                src="/icons/expandir.svg"
                alt="expandir"
              />
            </>
          ))}
      </div>
    </div>
  );
};

export default Feed;
