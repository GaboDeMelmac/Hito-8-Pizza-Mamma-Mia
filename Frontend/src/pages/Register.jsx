import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Register = () => {
  const [email, SetEmail] = useState("");
  const [clave, setClave] = useState("");
  const [clave2, setClave2] = useState("");
  //   const [color, setColor] = useState("#efefef");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("capture el click");
    console.log(clave.length);
    // Validaciones
    if (email == "" || clave == "" || clave2 == "") {
      alert("Favor intoducir su clave");
    } else if (clave.length < 6 || clave2.length < 6) {
      alert("Su clave de seguridad debe tener al menos 6 digitos");
    } else if (clave != clave2) {
      alert("Las claves ingresadas no son iguales");
    } else {
      alert("Su usario fué creado exitosamente!");
    }
  };

  return (
    <div className="Formulario_register">
      <div>
        <h2>Registrarse</h2>
      </div>
      <Form
      // style={{ backgroundColor: color }}
      >
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicEmail"
        >
          <Form.Label>Email</Form.Label>
          <input
            type="email"
            placeholder="Ingresar email"
            onChange={(eve) =>
              // console.log(eve.target.value)
              SetEmail(eve.target.value)
            }
          />
          <Form.Text className="text-muted">
            Recuerda nunca compartir tu cuenta de usuario.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicPassword"
        >
          <Form.Label>Contraseña</Form.Label>
          <input
            type="password"
            placeholder="Ingresar password"
            onChange={(eve) =>
              // console.log(eve.target.value)
              setClave(eve.target.value)
            }
          />
          <Form.Label>Confirmar Contraseña</Form.Label>
          <input
            type="password"
            placeholder="Confirmar password"
            onChange={(eve) =>
              // console.log(eve.target.value)
              setClave2(eve.target.value)
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Register;
