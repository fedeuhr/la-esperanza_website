import React, { useState, useEffect } from "react";
import "./FormContacto.css";
import ValidateForm from "./ValidateForm";
import validate from "./Validate";
import Gracias from "./Gracias";

const FormContacto = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, isLoading } =
    ValidateForm(submitForm, validate);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  function submitForm() {
    setIsSubmitted(true);
    setShowForm(false);
    const formSection = document.getElementsByClassName("form-contacto")[0];
    formSection.classList.add("hideFormSection");
  }

  return (
    <div className="form-contacto-container">
      <form className="form-contacto" onSubmit={handleSubmit}>
        <div className="form-header">
          <p className="form-title">¿Todavía no Consultaste?</p>
          <div className="form-info-container">
            <p className="form-info">¡Hacelo ahora y recibí un</p>
            <p className="form-info">10% de descuento!</p>
          </div>
        </div>
        <div className="contenedor-label-contacto">
          <div className="input-container-contacto">
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder="a"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="name" className="label">
              Nombre y Apellido
            </label>
          </div>
          {errors.name && <small className="input-error">{errors.name}</small>}
        </div>
        <div className="contenedor-label-contacto">
          <div className="input-container-contacto">
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder="a"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          {errors.email && (
            <small className="input-error">{errors.email}</small>
          )}
        </div>

        <div className="grid-container">
          <div className="contenedor-label-contacto">
            <div className="input-container-contacto">
              <input
                type="number"
                name="area_code"
                id="area_code"
                className="input"
                placeholder="a"
                value={values.area_code}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="label">
                Cod. área
              </label>
            </div>
            {errors.area_code && (
              <small className="input-error">{errors.area_code}</small>
            )}
          </div>
          <div className="contenedor-label-contacto">
            <div className="input-container-contacto">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="input"
                placeholder="a"
                value={values.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="label">
                Teléfono
              </label>
            </div>
            {errors.phone && (
              <small className="input-error">{errors.phone}</small>
            )}
          </div>
        </div>
        <div className="contenedor-label-contacto">
          <div className="input-consulta">
            <textarea
              name="comment"
              className="input"
              id="comment"
              rows="3"
              minLength="10"
              placeholder="a"
              value={values.comment}
              onChange={handleChange}
            />
            <label htmlFor="comment" className="label">
              Consulta
            </label>
          </div>
          {errors.comment && (
            <small className="input-error-consulta">{errors.comment}</small>
          )}
        </div>
        <div className="btnSubmit">
          {isLoading ? (
            <button type="submit" className="form-input-btn submitBtnLoading">
              ENVIANDO...
            </button>
          ) : (
            <button type="submit" className="form-input-btn submitBtn">
              CONSULTAR
            </button>
          )}
        </div>
      </form>
      {/* {true && <Gracias />} */}
      {!showForm && <Gracias />}
      <div className="form-contacto-img">
        <img src="/images/contacto/contacto.webp" alt="" />
      </div>
    </div>
  );
};

export { FormContacto };
