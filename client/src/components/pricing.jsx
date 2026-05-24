// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { motion } from "framer-motion";

// const pricingData = [
//   { type: "Swedish Massage", price: 150, duration: "60 minutes" },
//   { type: "Deep Tissue Massage", price: 200, duration: "60 minutes" },
//   { type: "Aromatherapy Massage", price: 200, duration: "75 minutes" },
//   { type: "Hot Stone Massage", price: 200, duration: "90 minutes" },
//   { type: "Nuru Massage", price: 300, duration: "90 minutes" },
// ];

// const Pricing = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref} className="py-5" style={{ backgroundColor: "#121212", color: "#fff" }}>
//       <Container>
//         <motion.h2
//           className="text-center mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Massage Pricing
//         </motion.h2>
//         <Row className="justify-content-center">
//           {pricingData.map((service, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)" }}
//               >
//                 <Card
//                   className="text-center shadow"
//                   // style={{ backgroundColor: "#1e1e1e", color: "#fff", border: "none" }}
//                 >
//                   <Card.Body>
//                     <Card.Title>{service.type}</Card.Title>
//                     <Card.Text>
//                       <strong>Duration:</strong> {service.duration}
//                     </Card.Text>
//                     <Card.Text>
//                       <strong>Price:</strong> ${service.price}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// });

// export default Pricing;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaClock, FaDollarSign, FaStar, FaCheckCircle } from "react-icons/fa";

const pricingData = [
  { 
    duration: "30 minutes", 
    price: 50, 
    icon: FaClock,
    description: "Quick relief session",
    popular: false,
    features: ["Perfect for lunch break", "Targeted area focus", "Quick stress relief"]
  },
  { 
    duration: "60 minutes", 
    price: 75, 
    icon: FaClock,
    description: "Standard relaxation session",
    popular: true,
    features: ["Full body massage", "Complete relaxation", "Stress reduction"]
  },
  { 
    duration: "90 minutes", 
    price: 100, 
    icon: FaClock,
    description: "Deep therapeutic session",
    popular: false,
    features: ["Deep tissue work", "Extended relaxation", "Maximum benefits"]
  },
  { 
    duration: "120 minutes", 
    price: 130, 
    icon: FaClock,
    description: "Ultimate luxury experience",
    popular: false,
    features: ["Ultimate pampering", "Full body + extras", "Complete rejuvenation"]
  },
];

const Pricing = React.forwardRef(({ scrollToSection, bookingsRef }, ref) => {
  return (
    <div ref={ref} className="py-5" style={{ backgroundColor: "#121212", color: "#fff" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">Massage Pricing</h2>
          <p className="lead text-muted">Choose the perfect duration for your needs</p>
          <div className="mx-auto" style={{ width: '60px', height: '3px', background: '#8B5CF6' }}></div>
        </motion.div>

        <Row className="justify-content-center">
          {pricingData.map((service, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card 
                  className={`text-center shadow-lg h-100 ${service.popular ? 'border-primary' : ''}`}
                  style={{ 
                    backgroundColor: service.popular ? "#8B5CF6" : "#1e1e1e", 
                    color: "#fff", 
                    border: service.popular ? "none" : "1px solid #333",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                >
                  {service.popular && (
                    <div style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "#FFD700",
                      color: "#333",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}>
                      <FaStar className="me-1" /> Most Popular
                    </div>
                  )}
                  <Card.Body className="p-4">
                    <service.icon 
                      size={40} 
                      className="mb-3" 
                      style={{ color: service.popular ? "#fff" : "#8B5CF6" }}
                    />
                    <Card.Title className="fs-2 fw-bold mb-2">
                      {service.duration}
                    </Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {service.description}
                    </Card.Text>
                    <div className="mb-4">
                      <span className="display-4 fw-bold">${service.price}</span>
                    </div>
                    
                    <div className="text-start mt-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="mb-2">
                          <FaCheckCircle className="me-2" style={{ color: service.popular ? "#FFD700" : "#8B5CF6" }} size={14} />
                          <small>{feature}</small>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-5"
        >
          <p className="text-muted">
            * All prices include professional certified therapists<br />
            * Additional charges may apply for mobile service or special requests
          </p>
        </motion.div>
      </Container>
    </div>
  );
});

export default Pricing;