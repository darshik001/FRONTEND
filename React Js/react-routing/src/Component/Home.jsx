import { Carousel, Container } from "react-bootstrap"

Carousel
 const Home =()=> {
  return (
    <>
     <section className="py-5 my-5">
       <Container>
         <Carousel>
      <Carousel.Item>
       <img className="d-block w-100"src="https://images.pexels.com/photos/33940625/pexels-photo-33940625.jpeg"alt="First slide" height={"500px"} />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className="d-block w-100"src="https://images.pexels.com/photos/34068183/pexels-photo-34068183.jpeg"alt="First slide" height={"500px"} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className="d-block w-100"src="https://images.pexels.com/photos/29537353/pexels-photo-29537353.jpeg"alt="First slide" height={"500px"} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
     </section>
    </>
  )
}


export default Home