import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
const Contact =()=> {
  return (
    <>
    <section className="py-5 my-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow p-4 border-0 rounded-4">
              <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
              <p className="text-center text-muted mb-4">
                We'd love to hear from you! Fill out the form below and our team will get back to you soon.
              </p>

              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here..."
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="dark" size="lg" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">📍 Address</h5>
            <p className="text-muted">123 Main Street, New Delhi, India</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">📞 Phone</h5>
            <p className="text-muted">+91 98765 43210</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">📧 Email</h5>
            <p className="text-muted">support@company.com</p>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Contact