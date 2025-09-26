import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const pricingData = [
  { type: "Swedish Massage", price: 150, duration: "60 minutes" },
  { type: "Deep Tissue Massage", price: 200, duration: "60 minutes" },
  { type: "Aromatherapy Massage", price: 200, duration: "75 minutes" },
  { type: "Hot Stone Massage", price: 200, duration: "90 minutes" },
  { type: "Nuru Massage", price: 300, duration: "90 minutes" },
];

const Pricing = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-5" style={{ backgroundColor: "#121212", color: "#fff" }}>
      <Container>
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Massage Pricing
        </motion.h2>
        <Row className="justify-content-center">
          {pricingData.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)" }}
              >
                <Card
                  className="text-center shadow"
                  // style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "none" }}
                >
                  <Card.Body>
                    <Card.Title>{service.type}</Card.Title>
                    <Card.Text>
                      <strong>Duration:</strong> {service.duration}
                    </Card.Text>
                    <Card.Text>
                      <strong>Price:</strong> ${service.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
});

export default Pricing;
