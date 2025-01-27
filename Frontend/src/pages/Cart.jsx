import { CardContext } from "../context/CardContext.jsx";
import { pizzas, pizzaCart } from "../data/pizzas.js";
import { formatearNumeroConMiles } from "../utils/format.js";
import React, { useContext, useState } from "react";

const Cart = () => {
  const { pizzasCarrito, setPizzasCarrito, calcularTotal, token } =
    useContext(CardContext);

  const [mensajeExito, setMensajeExito] = useState(""); // Estado para el mensaje de éxito

  // Función para enviar el carrito al backend
  const handlePagar = async () => {
    const carrito = pizzasCarrito.filter((pizza) => pizza.count > 0);

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Token JWT en el header
        },
        body: JSON.stringify({
          cart: carrito, // Enviar el carrito de compras
        }),
      });

      if (!response.ok) {
        throw new Error("Error al realizar la compra");
      }

      const data = await response.json();
      console.log(data); // Puedes mostrar la respuesta del backend aquí

      // Mostrar mensaje de éxito si la compra fue exitosa
      setMensajeExito("Compra realizada con éxito!");

      // Limpiar el carrito después de la compra
      // setPizzasCarrito([]);
    } catch (error) {
      console.error("Hubo un problema al realizar la compra:", error);
      setMensajeExito("Hubo un error al procesar la compra.");
    }
  };

  const handleAgregar = (index) => {
    pizzasCarrito[index].count++;
    setPizzasCarrito([...pizzasCarrito]);
  };

  const handleQuitar = (index) => {
    pizzasCarrito[index].count--;
    setPizzasCarrito([...pizzasCarrito.filter((pizza) => pizza.count > 0)]);
  };

  return (
    <div className="Cart">
      <h3>Detalles del pedido:</h3>
      {pizzasCarrito
        .filter((pizza) => pizza.count > 0)
        .map((pizza, index) => {
          return (
            <div className="dd-flex" key={index}>
              <img src={pizza.img} width={90} alt="" />
              <div className="Inrgedientes_text3">{pizza.name}</div>
              <p className="Precio_card">
                ${formatearNumeroConMiles(pizza.price)}
              </p>
              <button
                className="boton_cart_plus"
                onClick={() => handleAgregar(index)}
              >
                +
              </button>
              <p>{pizza.count}</p>

              <button
                className="boton_cart_minus"
                onClick={() => handleQuitar(index)}
              >
                -
              </button>
            </div>
          );
        })}
      <div>
        <div>
          <h2>Total: ${formatearNumeroConMiles(calcularTotal)}</h2>
        </div>

        {/* Mostrar el mensaje de éxito o error */}
        {mensajeExito && <p className="Precio_card">{mensajeExito}</p>}

        {/* Mostrar el botón solo si token es true */}
        {token && (
          <button className="Boton_pagar" onClick={handlePagar}>
            Pagar
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
