import { useEffect, useState } from "react";
import "./CuentaAtras.css";
import moment from "moment";
moment().format();

const CuentaAtras = ({ animation, top, right }) => {
  const [timeLeft, setTimeLeft] = useState();
  const [time, setTime] = useState(moment());
  const endMonth = moment().endOf("month").format("DD/MM/yyyy");

  useEffect(() => {
    setTime(moment().add(30, "h").add(50, "minutes"));
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(moment(time.diff(moment())).format("HH:mm:ss"));
    }, 1000);
  }, []);

  return (
    <div
      style={{ top: top, right: right }}
      className={
        animation
          ? "contenedor-oferta__descripcionTime"
          : "contenedor-oferta__descripcionTime--animated"
      }
    >
      <div className="contenedor-oferta__descripcion__time">
        <span className="contenedor-oferta__descripcion__time__text">
          {moment(time.diff(moment())).format("hh")}
        </span>
        <span className="contenedor-oferta__descripcion__time__unidad">
          {moment(time.diff(moment())).format("hh") == "01" ? "Hora" : "Horas"}
        </span>
      </div>
      <div className="contenedor-oferta__descripcion__time">
        <span className="contenedor-oferta__descripcion__time__text">
          {moment(time.diff(moment())).format("mm")}
        </span>
        <span className="contenedor-oferta__descripcion__time__unidad">
          {moment(time.diff(moment())).format("mm") == "01"
            ? "Minuto"
            : "Minutos"}
        </span>
      </div>
      <div className="contenedor-oferta__descripcion__time">
        <span className="contenedor-oferta__descripcion__time__text">
          {moment(time.diff(moment())).format("ss")}
        </span>
        <span className="contenedor-oferta__descripcion__time__unidad">
          {moment(time.diff(moment())).format("ss") == "01"
            ? "Segundo"
            : "Segundos"}
        </span>
      </div>
    </div>
  );
};

export default CuentaAtras;
