import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookingConfirmation() {
  const bookingData = JSON.parse(localStorage.getItem("bookingData"));

  if (!bookingData) {
    return (
      <Container className="mt-5 text-center">
        <h2>No booking found.</h2>
        <Button as={Link} to="/movies" variant="primary">
          Go Back to Movies
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h2>🎫 Booking Confirmation</h2>
        <hr />
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Email:</strong> {bookingData.email}</p>
        <p><strong>Movie:</strong> {bookingData.movie}</p>
        <p><strong>Seats:</strong> {bookingData.seats}</p>
        <p><strong>Date:</strong> {bookingData.date}</p>

        <Button as={Link} to="/movies" variant="success">
          Book Another Ticket
        </Button>
      </Card>
    </Container>
  );
}

export default BookingConfirmation;
