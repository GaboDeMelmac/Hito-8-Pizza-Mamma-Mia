import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="header_pizza">
      <h1>Error 404!</h1>
      <p>Parece que algo salió mal, porfavor vuelve al inicio</p>
      <div className="botones_card">
        <button
          type="button"
          className=" ms-auto boton_esatdo_home btn btn-primary"
        >
          <Link to="/" className="text-white text-decoration-none">
            Volver al inicio
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
