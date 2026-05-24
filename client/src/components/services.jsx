import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSpa, FaHandsHelping, FaHeartbeat, FaFire, FaKissWinkHeart, FaMapMarkerAlt } from "react-icons/fa";
import ServicesCard from "../components/services-card";

const services = [
  {
    title: "Swedish Massage",
    description: "Relaxing full-body massage to relieve tension and stress.",
    icon: FaSpa,
  },
  {
    title: "Deep Tissue Massage",
    description: "Targets deeper layers of muscles to alleviate pain and stiffness.",
    icon: FaHandsHelping,
  },
  {
    title: "Aromatherapy Massage",
    description: "Uses essential oils to enhance relaxation and well-being.",
    icon: FaHeartbeat,
  },
  {
    title: "Hot Stone Massage",
    description: "Smooth heated stones are used to ease muscle tension and promote relaxation.",
    icon: FaFire,
  },
  {
    title: "Nuru Massage",
    description: "A unique and sensual massage using special gel for deep relaxation and stress relief.",
    icon: FaKissWinkHeart, 
  },
  {
    title: "Masseuses Across the Country",
    description: "Fresha Massage Spa & Wellness & Wellness& Wellnesshas certified masseuses in different states, ready to provide professional massage experiences wherever you are.",
    icon: FaMapMarkerAlt,
  },
];

const Services = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="justify-content-center">
        {services.map((service, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
            <ServicesCard {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default Services;
