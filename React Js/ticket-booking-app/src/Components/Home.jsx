import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            fluid
            style={{ width: "80%", maxWidth: "300px" }}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-3">Welcome to TicketMaster 🎟️</h1>
          <p>
            Your one-stop destination to book movie and event tickets online. 
            Fast, easy, and secure.
          </p>
          <Button as={Link} to="/movies" variant="primary">
            Browse Movies
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
