import { Container, Row, Col, Image, Button } from "react-bootstrap";
const About = ()=> {
  return (
    <>
    <section className="py-5 my-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Image
              src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg"
              alt="About Us"
              fluid
              rounded
            />
          </Col>

          <Col md={6}>
            <h2 className="fw-bold mb-3">About Our Company</h2>
            <p className="text-muted">
              We are a passionate team dedicated to creating high-quality web
              solutions. Our goal is to deliver the best user experience through
              modern design, fast performance, and scalable technology.
            </p>
            <p className="text-muted">
              Founded in 2020, our company has helped businesses grow online by
              providing professional web development and e-commerce solutions.
            </p>
            <Button variant="dark" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default About