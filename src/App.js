import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Modelo } from "./pages/Modelo/Modelo";
import { Contacto } from "./pages/Contacto/Contacto";
import { Empresa } from "./pages/Empresa/Empresa";
import { Showroom } from "./pages/Showroom/Showroom";
import { NoEncontrado } from "./pages/NoEncontrado/NoEncontrado";
import { Oferta } from "./pages/Oferta/Oferta";
import React from "react";
const Header = React.lazy(() => import("./components/Header/Header"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cabana-:modelo" element={<Modelo />} />
        <Route exact path="/modelo-:modelo" element={<Modelo />} />
        <Route exact path="/oferta" element={<Oferta />} />
        <Route exact path="/showroom" element={<Showroom />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
