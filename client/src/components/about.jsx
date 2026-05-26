// import React from "react";
// import { Container, Row, Col, Image, Button } from "react-bootstrap";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import ceoImage from "../assets/massagetherapist.jpg"; // Ensure you have a CEO image in your assets folder

// const About = React.forwardRef(({ scrollToSection, bookingsRef }, ref) => {
//   return (
//     <div ref={ref} className="py-5 bg-dark text-white">
//       <Container>
//         <Row className="align-items-center">
//           {/* CEO Info */}
//           <Col md={6}>
//             <h2 className="text-warning">About Us</h2>
//             <p>
//               Welcome to <strong>Fresha Massage Spa & Wellness</strong>, where relaxation meets
//               rejuvenation. We specialize in delivering exceptional{" "}
//               <strong>massage therapy</strong> tailored to your needs, ensuring
//               every session is a <strong>deeply restorative experience</strong>.
//               Whether you're looking to relieve stress, ease muscle tension, or
//               simply indulge in self-care, our skilled professionals are here to
//               help you <strong>reconnect with your body and mind</strong>.
//             </p>
//             <p>
//               At <strong>Fresha Massage Spa & Wellness</strong>, we believe that{" "}
//               <strong>true relaxation should be effortless</strong>which is why
//               we offer <strong>unmatched flexibility in our services</strong>.
//               You can choose to <strong>visit our serene studio</strong> for a
//               tranquil escape, or let us bring the experience{" "}
//               <strong>directly to you</strong>, whether you're at home, in a
//               hotel, or even at a private event. Our mission is to provide you
//               with <strong>comfort, convenience, and top-tier service</strong>{" "}
//               wherever you need it.
//             </p>
//             <p>
//               With a <strong>network of 39 certified masseuses</strong> across
//               multiple states, we ensure that professional, high-quality care is
//               always within reach. Each session is customized to fit your unique
//               preferences, combining the <strong>best techniques</strong> with a
//               calming atmosphere to leave you feeling refreshed and restored.
//             </p>

//             <h4 className="text-warning">Meet Our CEO</h4>
//             <p>
//               <strong>Latisha Raine Taylor</strong>, the founder and visionary behind{" "}
//               <strong>Fresha Massage Spa & Wellness</strong>, has dedicated over a decade to
//               perfecting the art of massage therapy. Her passion for wellness
//               and commitment to excellence drive the foundation of our services.
//               Under her leadership, <strong>Fresha Massage Spa & Wellness</strong> has become a
//               trusted name in personalized massage experiences, where every
//               client is treated with{" "}
//               <strong>care, professionalism, and expertise</strong>.
//             </p>

//             {/* Social Media Links */}
//             <div className="d-flex gap-3 mt-3">
//               <a
//                 href="https://www.facebook.com/share/18n1BA2eiJ/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-warning fs-4"
//               >
//                 <FaFacebook />
//               </a>
//               <a
//                 href="https://www.instagram.com/latttaylor?igsh=MXVocGU1aGhhYjhzdQ=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-warning fs-4"
//               >
//                 <FaInstagram />
//               </a>
//             </div>

//             {/* Book Now Button */}
//             <Button
//               variant="primary"
//               className="mt-4"
//               onClick={() => scrollToSection(bookingsRef)}
//             >
//               Book Now
//             </Button>
//           </Col>

//           {/* CEO Image */}
//           <Col md={6} className="text-center">
//             <Image
//               src={ceoImage}
//               alt="CEO"
//               roundedCircle
//               fluid
//               width={800}
//               height={600}
//               className="shadow-lg img-fluid"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// });

// export default About;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaCheckCircle, FaAward, FaUsers, FaClock, FaStar, FaGem, FaHandHoldingHeart, FaWhatsapp } from "react-icons/fa";
import ceoImage from "../assets/massagetherapist.jpg";

const About = React.forwardRef(({ scrollToSection, bookingsRef }, ref) => {
  const stats = [
    { icon: FaUsers, value: "39+", label: "Certified Masseuses", color: "#8B5CF6" },
    { icon: FaClock, value: "10+", label: "Years Experience", color: "#EC4899" },
    { icon: FaAward, value: "10,000+", label: "Happy Clients", color: "#F59E0B" },
    { icon: FaStar, value: "4.9", label: "Rating", color: "#10B981" }
  ];

  return (
    <div ref={ref} className="py-5" style={{ background: "#fff" }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{ 
                display: "inline-block",
                background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                padding: "5px 15px",
                borderRadius: "50px",
                marginBottom: "1rem",
                color: "white",
                fontSize: "0.9rem"
              }}>
                About Us
              </div>
              <h2 className="display-4 fw-bold mb-4">
                Where Relaxation Meets <span style={{ color: "#8B5CF6" }}>Rejuvenation</span>
              </h2>
              
              <p className="lead mb-4">
                Welcome to <strong>Fresha Massage Spa & Wellness</strong>, where we specialize in delivering exceptional 
                massage therapy tailored to your unique needs.
              </p>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">
                  <FaHandHoldingHeart className="me-2" style={{ color: "#8B5CF6" }} />
                  Our Mission
                </h5>
                <p>
                  To provide unparalleled massage experiences that promote wellness, 
                  relieve stress, and enhance quality of life through professional, 
                  personalized care.
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Why Choose Us?</h5>
                <Row>
                  <Col md={6}>
                    <div className="mb-2">
                      <FaCheckCircle className="me-2" style={{ color: "#8B5CF6" }} />
                      <small>39+ certified masseuses</small>
                    </div>
                    <div className="mb-2">
                      <FaCheckCircle className="me-2" style={{ color: "#8B5CF6" }} />
                      <small>Mobile service available</small>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-2">
                      <FaCheckCircle className="me-2" style={{ color: "#8B5CF6" }} />
                      <small>100% satisfaction guaranteed</small>
                    </div>
                    <div className="mb-2">
                      <FaCheckCircle className="me-2" style={{ color: "#8B5CF6" }} />
                      <small>Flexible scheduling</small>
                    </div>
                  </Col>
                </Row>
              </div>
              
              <Row className="mb-4">
                {stats.map((stat, idx) => (
                  <Col key={idx} className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="fs-1 mb-2" style={{ color: stat.color }} />
                      <div className="fw-bold fs-3">{stat.value}</div>
                      <div className="small text-muted">{stat.label}</div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
              
              <div className="d-flex gap-3 flex-wrap">
                <Button 
                  onClick={() => scrollToSection(bookingsRef)}
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    fontWeight: "bold"
                  }}
                >
                  Book Your Session
                </Button>
                <Button 
                  href="https://wa.me/18644997958?text=Hello!%20I'm%20interested%20in%20booking%20a%20massage%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </Button>
              </div>
              
              <div className="mt-4">
                <div className="d-flex gap-2">
                  <a href="https://www.facebook.com/share/17crpfuxkF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{
                    width: "35px",
                    height: "35px",
                    background: "#1877F2",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white"
                  }}>
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/18644997958?text=Hello!%20I'm%20interested%20in%20booking%20a%20massage%20session." target="_blank" rel="noopener noreferrer" style={{
                    width: "35px",
                    height: "35px",
                    background: "#25D366",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              <div style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}>
                <img 
                  src={ceoImage}
                  alt="CEO Latisha Raine Taylor"
                  className="img-fluid"
                  style={{ width: "100%", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                padding: "1rem",
                borderRadius: "15px",
                textAlign: "center",
                minWidth: "120px",
                color: "white"
              }}>
                <div className="fw-bold fs-3">10+</div>
                <div className="small">Years Excellence</div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default About;