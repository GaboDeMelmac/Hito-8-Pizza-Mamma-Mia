import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className=" my-5">
      <footer className="footer_edit footer_msj text-center text-lg-start text-white bg-dark">
        <p className="Footer_textto">
          2024 - Pizzería Mamma Mia! - Todos los derechos reservados{" "}
        </p>
        <hr className="container pb-0" />
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Pizzería Mamma Mia
                </h6>
                <p>
                  Utilizamos los mejores ingredientes para nuestras Pizzas,
                  cualquier duda o consulta te peudes poner en conctacto con
                  nosotros
                </p>
              </div>

              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Productos
                </h6>
                <p>
                  <a href="#" className="text-white">
                    Nosotros
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Promociones
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Información
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Cadenas
                  </a>
                </p>
              </div>

              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Links Utiles{" "}
                </h6>
                <p>
                  <a href="#" className="text-white">
                    Mi Cuenta
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Mis Compras
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Carro de Compras
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Ayuda
                  </a>
                </p>
              </div>

              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contacto
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Calle Bandera, #235,
                  Santiago, CL
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  atencion.cliente@pizza.mia.cl
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
            {/* Grid row */}
          </section>
          {/* Section: Links */}

          <hr className="my-3" />

          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  © 2024 Copyright - Todos los derechos reservados
                  <a href="https://mdbootstrap.com/" className="text-white">
                    {/* MDBootstrap.com */}
                  </a>
                </div>
                {/* Copyright */}
              </div>

              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                {/* Twitter */}
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                {/* Google */}
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>

                {/* Instagram */}
                <a href="#" className="btn btn-outline-light btn-floating m-1">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
