import React, { useState, useContext } from "react";
import { Button, Card, ListGroup, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { capitalizarPrimeraLetra } from "../utils/mayuscula";
import { formatearNumeroConMiles } from "../utils/format";
import { CardContext } from "../context/CardContext";
import { Link, NavLink, useParams } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { id } = useParams;
  const { pizzas } = useContext(CardContext);

  const { pizzasCarrito, setPizzasCarrito } = useContext(CardContext);

  // Estado para controlar el mensaje de éxito
  const [showAlert, setShowAlert] = useState(false);

  // Función para agregar pizza al carrito y aumentar la cantidad
  const handleAgregar = (pizza) => {
    // Verificamos si la pizza ya está en el carrito
    const existingPizza = pizzasCarrito.find((item) => item.id === pizza.id);

    if (existingPizza) {
      // Si ya existe, incrementamos su cantidad
      const updatedCarrito = pizzasCarrito.map((item) => {
        if (item.id === pizza.id) {
          return { ...item, count: item.count + 1 }; // Incrementa el count de la pizza existente
        }
        return item;
      });
      setPizzasCarrito(updatedCarrito); // Actualizamos el carrito con el array modificado
    } else {
      // Si la pizza no está en el carrito, la agregamos con count: 1
      const newPizza = { ...pizza, count: 1 };
      setPizzasCarrito([...pizzasCarrito, newPizza]); // Agregamos la pizza al carrito
    }

    // Mostrar el mensaje de éxito
    setShowAlert(true);

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <div className="Bloque_de_cada_pizza" key={pizza.id}>
      <Card style={{ width: "80%" }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title className="Titulo_card">
            {capitalizarPrimeraLetra(pizza.name)}
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="Inrgedientes_text">
              <FontAwesomeIcon
                icon={faPizzaSlice}
                style={{
                  marginRight: "5px",
                  color: "rgb(82, 26, 17)",
                  fontSize: "20px",
                }}
              />
              Ingredientes:
            </ListGroup.Item>

            <ListGroup.Item className="Inrgedientes_text2">
              <ul>
                {pizza.ingredients.map((ingredient, id) => (
                  <li key={id}>{ingredient}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item className="Precio_card">
              Precio: ${formatearNumeroConMiles(pizza.price)}
            </ListGroup.Item>
          </ListGroup>

          <div className="botones_card">
            <Button
              className="boton_compra1"
              variant="primary"
              // onClick={() => alert(`/pizza/${pizza.id}`)}
            >
              <NavLink
                to={`/pizza/${pizza.id}`}
                className="text-black text-decoration-none"
              >
                Ver Más
              </NavLink>
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  marginLeft: "5px",
                  color: "rgb(33, 37, 41)",
                }}
              />
            </Button>
            <Button
              onClick={() => handleAgregar(pizza)} // Llamamos a la función de agregar pizza
              className="boton_compra2"
              variant="primary"
              style={{ marginLeft: "1px" }}
            >
              Añadir
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ marginLeft: "5px", color: "white" }}
              />
            </Button>
          </div>
        </Card.Body>
        {/* Alerta de éxito al agregar pizza */}
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            ¡Pizza agregada al Carrito! 🍕
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default CardPizza;
