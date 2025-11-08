import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import BookTicket from "./Components/BookTicket";
import BookingConfirmation from "./Components/BookingConfirmation";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/book" element={<BookTicket />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
