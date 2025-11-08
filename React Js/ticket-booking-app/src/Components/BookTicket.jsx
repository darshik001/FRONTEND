import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function BookTicket() {
  const location = useLocation();
  const navigate = useNavigate();
  const movieId = new URLSearchParams(location.search).get("id");

  const movies = {
    1: "Avengers: Endgame",
    2: "Inception",
    3: "Interstellar"
  };

  const movieName = movies[movieId] || "Unknown Movie";

  const [form, setForm] = useState({ name: "", email: "", seats: 1, date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      ...form,
      movie: movieName,
    };

    // Save booking data to localStorage
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // Redirect to confirmation page
    navigate("/confirmation");
  };

  return (
    <Container className="mt-5">
      <h1>Book Your Ticket 🎫</h1>
      <p>Booking for: <strong>{movieName}</strong></p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Seats</Form.Label>
          <Form.Control
            type="number"
            name="seats"
            min="1"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Confirm Booking
        </Button>
      </Form>
    </Container>
  );
}

export default BookTicket;
