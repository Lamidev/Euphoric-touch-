// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-3 mt-auto w-100">
//       <Container>
//         <Row className="align-items-center justify-content-md-between text-center text-md-start">
//           {/* Social Media Links */}
//           <Col xs={12} md={4} className="mb-3 mb-md-0">
//             <h5>Connect with us today</h5>
//             <div className="d-flex justify-content-center justify-content-md-start gap-3">
//               <a
//                 href="https://www.facebook.com/share/18n1BA2eiJ/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light social-link"
//               >
//                 <FaFacebook size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/latttaylor?igsh=MXVocGU1aGhhYjhzdQ=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light social-link"
//               >
//                 <FaInstagram size={24} />
//               </a>
//               <a href="mailto:Latishataylor1988@gmail.com" className="text-light social-link">
//                 <FaEnvelope size={24} />
//               </a>
//             </div>
//           </Col>

//           {/* Copyright Notice */}
//           <Col xs={12} md={4}>
//             <h5>Fresha Massage Spa & Wellness</h5>
//             <p className="mb-0">
//               &copy; {new Date().getFullYear()} Fresha Massage Spa & Wellness. All rights reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>

//       {/* Custom Styles for Hover Effects */}
//       <style>
//         {`
//           .social-link:hover {
//             color: #0d6efd; /* Bootstrap primary blue */
//             transition: color 0.3s ease-in-out;
//           }
//         `}
//       </style>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ background: "#0F0F0F", color: "#fff", padding: "3rem 0 1rem" }}>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-3" style={{ 
                background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              }}>
                Fresha Massage Spa
              </h3>
              <p style={{ color: "#d3d3d3", lineHeight: "1.6" }}>
                Experience ultimate relaxation with our professional massage services. 
                Certified therapists, luxurious experience, and unparalleled care.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="https://www.facebook.com/share/17crpfuxkF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  color: "#fff"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#8B5CF6"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <FaFacebook />
                </a>
                <a href="https://wa.me/18644997958?text=Hello!%20I'm%20interested%20in%20booking%20a%20massage%20session." target="_blank" rel="noopener noreferrer" style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  color: "#fff"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#25D366"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <FaWhatsapp />
                </a>
                <a href="mailto:freshamassagebooking@gmail.com" style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  color: "#fff"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#8B5CF6"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h5 className="mb-3" style={{ color: "#fff" }}>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#8B5CF6"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>Home</a></li>
                <li className="mb-2"><a href="#about" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#8B5CF6"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>About Us</a></li>
                <li className="mb-2"><a href="#services" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#8B5CF6"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>Services</a></li>
                <li className="mb-2"><a href="#pricing" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#8B5CF6"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>Pricing</a></li>
                <li className="mb-2"><a href="#booking" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#8B5CF6"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>Book Now</a></li>
              </ul>
            </motion.div>
          </Col>
          
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h5 className="mb-3" style={{ color: "#fff" }}>Contact Info</h5>
              <div className="mb-2 d-flex align-items-center gap-2">
                <FaPhone style={{ color: "#8B5CF6" }} />
                <a href="tel:+18644997958" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#8B5CF6"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>
                  +1 864-499-7958
                </a>
              </div>
              <div className="mb-2 d-flex align-items-center gap-2">
                <FaWhatsapp style={{ color: "#25D366" }} />
                <a href="https://wa.me/18644997958?text=Hello!%20I'm%20interested%20in%20booking%20a%20massage%20session." target="_blank" rel="noopener noreferrer" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#25D366"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>
                  +1 864-499-7958 (WhatsApp)
                </a>
              </div>
              <div className="mb-2 d-flex align-items-center gap-2">
                <FaEnvelope style={{ color: "#8B5CF6" }} />
                <a href="mailto:freshamassagebooking@gmail.com" style={{ color: "#d3d3d3", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#8B5CF6"} onMouseLeave={(e) => e.target.style.color = "#d3d3d3"}>
                  freshamassagebooking@gmail.com
                </a>
              </div>
              <div className="mb-2 d-flex align-items-center gap-2">
                <FaClock style={{ color: "#8B5CF6" }} />
                <span style={{ color: "#d3d3d3" }}>Mon-Sun: 9am - 9pm</span>
              </div>
            </motion.div>
          </Col>
        </Row>
        
        <hr style={{ borderColor: "#333" }} />
        
        <Row>
          <Col className="text-center">
            <p style={{ color: "#d3d3d3", marginBottom: 0 }}>
              &copy; {new Date().getFullYear()} Fresha Massage Spa & Wellness. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;