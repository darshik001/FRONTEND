import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Avengers: Endgame", img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg" },
  { id: 2, title: "Inception", img: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg" },
  { id: 3, title: "Interstellar", img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg" },
];

function Movies() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Now Showing</h1>
      <Row>
        {movies.map((movie) => (
          <Col md={4} key={movie.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={movie.img} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button as={Link} to={`/book?id=${movie.id}`} variant="success">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Movies;
