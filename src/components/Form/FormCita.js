import React, { useState } from "react";
import ValidateForm from "./ValidateFormCita";
import validate from "./ValidateCita";
import DatePicker, { registerLocale } from "react-datepicker";
import el from "date-fns/locale/es"; // the locale you want
import { setMinutes, setHours } from "date-fns";
import "./FormCita.css";
import "react-datepicker/dist/react-datepicker.css";
import GraciasCita from "./GraciasCita";
import { useEffect } from "react";
registerLocale("el", el); // register it with the name you want

const FormCita = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, isLoading } =
    ValidateForm(submitForm, validate);
  console.log(
    "🚀 ~ file: FormCita.js ~ line 15 ~ FormCita ~ isLoading",
    isLoading
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  function submitForm() {
    setIsSubmitted(true);
    setShowForm(false);
    const formSection = document.getElementsByClassName("show_cita_form")[0];
    formSection.classList.add("hideFormSection");
  }

  const [startDate, setStartDate] = useState();

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  function keyUpHandler(elem, e, i) {
    elem.target.value = elem.target.value.replace(/[^0-9]/g, "");

    while (elem.target.value.charAt(0) === "0") {
      elem.target.value = elem.target.value.substr(1);
    }
    const tel = document.getElementById("phone");
    switch (elem.target.value.length) {
      case 2:
        tel.setAttribute("maxLength", 8);
        tel.setAttribute("minLength", 8);
        break;
      case 3:
        tel.setAttribute("maxLength", 7);
        tel.setAttribute("minLength", 7);
        break;
      case 4:
        tel.setAttribute("maxLength", 6);
        tel.setAttribute("minLength", 6);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="show_cita_form">
        <div className="showroom-container ">
          <div className="">
            <p className="title__form__cita">¡Agendá tu cita!</p>
            <div className="title__form__cita-info">
              <p>Visitá nuestro</p>
              <p className="title__form__cita-info2">Showroom de Casas</p>
            </div>
          </div>
          <div className="container-label">
            <div className="inputContainer">
              <input
                type="text"
                name="name"
                id="name"
                className="inputCita"
                placeholder="Nombre y Apellido"
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="name" className="label">
                Nombre y Apellido
              </label>
            </div>
            {errors.name && (
              <small className="input-error">{errors.name}</small>
            )}
          </div>
          <div className="container-label">
            <div className="inputContainer">
              <input
                type="email"
                name="email"
                id="email"
                className="inputCita"
                placeholder="a"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="name" className="label">
                Email
              </label>
            </div>
            {errors.email && (
              <small className="input-error">{errors.email}</small>
            )}
          </div>

          <div className="grid-container">
            <div className="container-label">
              <div className="inputContainer">
                <input
                  type="tel"
                  name="area_code"
                  id="area_code"
                  className="inputCita"
                  placeholder="a"
                  value={values.area_code}
                  onKeyUp={keyUpHandler}
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
            <div className="container-label">
              <div className="inputContainer">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="inputCita"
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

          <div className="container-label">
            <div className="inputContainer-radio">
              <fieldset className="container-inputs-radio">
                <legend className="p__donde">
                  Seleccione una ubicación de showroom
                </legend>
                <div className="donde__inputs">
                  <div className="label__radio__donde">
                    <input
                      onChange={handleChange}
                      className="input__radio__donde"
                      type="radio"
                      id="bsas"
                      name="donde"
                      value="bsas"
                    />
                    <label className="ubicacion__label" htmlFor="bsas">
                      Hudson
                    </label>
                  </div>
                  <div className="label__radio__donde">
                    <input
                      onChange={handleChange}
                      className="input__radio__donde"
                      type="radio"
                      id="fabrica"
                      name="donde"
                      value="fabrica"
                    />
                    <label className="ubicacion__label" htmlFor="fabrica">
                      Córdoba
                    </label>
                  </div>
                  <div className="label__radio__donde">
                    <input
                      disabled
                      className="input__radio__donde"
                      type="radio"
                      id="uru"
                      name="donde"
                      value="uru"
                    />
                    <label
                      style={{ color: "gray" }}
                      className="ubicacion__label"
                      htmlFor="uru"
                    >
                      Uruguay (próximamente)
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            {errors.donde && (
              <small className="input-error">{errors.donde}</small>
            )}
          </div>
          <div className="container-label">
            <div className="inputContainer-disponibilidad inputContainer">
              <DatePicker
                className="inputCita"
                dateFormat="HH:mm - dd/MM/yyyy"
                timeFormat="HH:mm"
                selected={startDate}
                minDate={new Date()}
                placeholderText="Disponibilidad horaria"
                onFocus={(e) => e.target.blur(e)}
                onChange={(date) => {
                  setStartDate(date);
                }}
                showTimeSelect
                includeTimes={[
                  setHours(setMinutes(new Date(), 0), 10),
                  setHours(setMinutes(new Date(), 0), 11),
                  setHours(setMinutes(new Date(), 0), 12),
                  setHours(setMinutes(new Date(), 0), 13),
                  setHours(setMinutes(new Date(), 0), 14),
                  setHours(setMinutes(new Date(), 0), 15),
                  setHours(setMinutes(new Date(), 0), 16),
                  setHours(setMinutes(new Date(), 0), 17),

                  setHours(setMinutes(new Date(), 15), 10),
                  setHours(setMinutes(new Date(), 15), 11),
                  setHours(setMinutes(new Date(), 15), 12),
                  setHours(setMinutes(new Date(), 15), 13),
                  setHours(setMinutes(new Date(), 15), 14),
                  setHours(setMinutes(new Date(), 15), 15),
                  setHours(setMinutes(new Date(), 15), 16),
                  setHours(setMinutes(new Date(), 15), 17),

                  setHours(setMinutes(new Date(), 30), 10),
                  setHours(setMinutes(new Date(), 30), 11),
                  setHours(setMinutes(new Date(), 30), 12),
                  setHours(setMinutes(new Date(), 30), 13),
                  setHours(setMinutes(new Date(), 30), 14),
                  setHours(setMinutes(new Date(), 30), 15),
                  setHours(setMinutes(new Date(), 30), 16),
                  setHours(setMinutes(new Date(), 30), 17),

                  setHours(setMinutes(new Date(), 45), 10),
                  setHours(setMinutes(new Date(), 45), 11),
                  setHours(setMinutes(new Date(), 45), 12),
                  setHours(setMinutes(new Date(), 45), 13),
                  setHours(setMinutes(new Date(), 45), 14),
                  setHours(setMinutes(new Date(), 45), 15),
                  setHours(setMinutes(new Date(), 45), 16),
                  setHours(setMinutes(new Date(), 45), 17),
                ]}
                timeIntervals={15}
                filterTime={filterPassedTime}
                strictParsing
                locale="el"
                timeCaption="Hora"
                popperPlacement="bottom-start"
                name="cita_date"
                id="cita_date"
                autoComplete="none"
              />
              <label htmlFor="cita_date" className="label_date">
                Disponibilidad
              </label>
            </div>
            {errors.cita_date && (
              <small className="input-error">{errors.cita_date}</small>
            )}
          </div>

          <div id="form-contain-btn" className="btnSubmit">
            {isLoading ? (
              <button className="form-input-btn submitBtnLoading" type="submit">
                Enviando...
              </button>
            ) : (
              <button className="form-input-btn submitBtn" type="submit">
                Enviar
              </button>
            )}
          </div>
        </div>
      </form>
      {/* {true && <Gracias />} */}
      {!showForm && <GraciasCita />}
    </>
  );
};

export { FormCita };
