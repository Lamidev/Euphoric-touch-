import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import ceoImage from "../assets/massagetherapist.jpg"; // Ensure you have a CEO image in your assets folder

const About = React.forwardRef(({ scrollToSection, bookingsRef }, ref) => {
  return (
    <div ref={ref} className="py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          {/* CEO Info */}
          <Col md={6}>
            <h2 className="text-warning">About Us</h2>
            <p>
              Welcome to <strong>Euphoric Touch</strong>, where relaxation meets
              rejuvenation. We specialize in delivering exceptional{" "}
              <strong>massage therapy</strong> tailored to your needs, ensuring
              every session is a <strong>deeply restorative experience</strong>.
              Whether you're looking to relieve stress, ease muscle tension, or
              simply indulge in self-care, our skilled professionals are here to
              help you <strong>reconnect with your body and mind</strong>.
            </p>
            <p>
              At <strong>Euphoric Touch</strong>, we believe that{" "}
              <strong>true relaxation should be effortless</strong>which is why
              we offer <strong>unmatched flexibility in our services</strong>.
              You can choose to <strong>visit our serene studio</strong> for a
              tranquil escape, or let us bring the experience{" "}
              <strong>directly to you</strong>, whether you're at home, in a
              hotel, or even at a private event. Our mission is to provide you
              with <strong>comfort, convenience, and top-tier service</strong>{" "}
              wherever you need it.
            </p>
            <p>
              With a <strong>network of 39 certified masseuses</strong> across
              multiple states, we ensure that professional, high-quality care is
              always within reach. Each session is customized to fit your unique
              preferences, combining the <strong>best techniques</strong> with a
              calming atmosphere to leave you feeling refreshed and restored.
            </p>

            <h4 className="text-warning">Meet Our CEO</h4>
            <p>
              <strong>Latisha Raine Taylor</strong>, the founder and visionary behind{" "}
              <strong>Euphoric Touch</strong>, has dedicated over a decade to
              perfecting the art of massage therapy. Her passion for wellness
              and commitment to excellence drive the foundation of our services.
              Under her leadership, <strong>Euphoric Touch</strong> has become a
              trusted name in personalized massage experiences, where every
              client is treated with{" "}
              <strong>care, professionalism, and expertise</strong>.
            </p>

            {/* Social Media Links */}
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.facebook.com/share/18n1BA2eiJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/latttaylor?igsh=MXVocGU1aGhhYjhzdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-4"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Book Now Button */}
            <Button
              variant="primary"
              className="mt-4"
              onClick={() => scrollToSection(bookingsRef)}
            >
              Book Now
            </Button>
          </Col>

          {/* CEO Image */}
          <Col md={6} className="text-center">
            <Image
              src={ceoImage}
              alt="CEO"
              roundedCircle
              fluid
              width={800}
              height={600}
              className="shadow-lg img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default About;
