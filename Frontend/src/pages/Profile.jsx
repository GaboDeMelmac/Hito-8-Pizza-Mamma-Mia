import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"; // Importar useContext
import { CardContext } from "../context/CardContext"; // Asegúrate de importar correctamente el contexto

const Profile = () => {
  const navigate = useNavigate();
  const { token, usuario, loadingProfile, logout, getProfile } =
    useContext(CardContext); // Usamos useContext para acceder al CardContext

  useEffect(() => {
    if (token && !usuario) {
      getProfile(); // Si el token está disponible y el usuario no está cargado, obtenemos el perfil
    }
  }, [token, usuario, getProfile]); // Dependemos tanto del token como del usuario

  if (loadingProfile) return <h3>Cargando datos...</h3>; // Mostrar loading mientras cargamos

  if (!usuario) {
    // Si no hay usuario (es decir, no se pudo obtener el perfil), redirigimos a login
    navigate("/login");
    return null; // Asegúrate de no renderizar nada mientras se hace la redirección
  }

  return (
    <div>
      <div className="Formulario_login">
        <div>
          <h2>Perfil de Usuario</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <hr />
            <Form.Label className="d-flex">
              <strong>Email:</strong>
              <span>{usuario.email}</span> {/* Usa el 'usuario' del contexto */}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex">
              <strong>ID:</strong>
              <span>{usuario.id}</span> {/* Usa el 'usuario' del contexto */}
            </Form.Label>
          </Form.Group>
          <Button variant="primary" onClick={logout}>
            Cerrar sesión
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
