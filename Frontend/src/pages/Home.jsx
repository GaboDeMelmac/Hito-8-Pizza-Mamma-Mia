import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "../assets/CSS/styles.css";

const Home = () => {
  // Obtener las pizzas del contexto
  const { info } = useContext(CardContext);
  const { pizzas } = useContext(CardContext);

  return (
    <>
      <Header />
      <div className="Home_page">
        <Row>
          {info.map((pizzas) => (
            <Col key={pizzas.id} md={4}>
              <CardPizza pizza={pizzas} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
