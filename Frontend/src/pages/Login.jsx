import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext"; // Importa el contexto

const Login = () => {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(CardContext); // Usamos el login del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (email === "" || clave === "") {
      alert("Favor introducir su email y clave.");
    } else if (clave.length < 6) {
      alert("Favor ingresar su clave con más de 6 dígitos.");
    } else {
      try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: clave,
          }),
        });
        const data = await res.json();

        if (data.token) {
          alert("¡Usted se ha logeado con éxito, Bienvenido!");
          login(email, data.token); // Llamamos a la función de login del contexto
          navigate("/profile"); // Redirigimos al perfil
        } else {
          alert("Datos no válidos");
        }
      } catch (error) {
        console.log(error);
        alert("Error al realizar la solicitud");
      }
    }
  };

  return (
    <div className="Formulario_login">
      <div>
        <h2>Login</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicEmail"
        >
          <Form.Label>Email</Form.Label>
          <input
            type="email"
            placeholder="Ingresar email"
            onChange={(eve) => setEmail(eve.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicPassword"
        >
          <Form.Label>Contraseña</Form.Label>
          <input
            type="password"
            placeholder="Ingresar password"
            onChange={(eve) => setClave(eve.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default Login;
