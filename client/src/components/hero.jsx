// import Carousel from "react-bootstrap/Carousel";
// import { motion } from "framer-motion";
// import Button from "react-bootstrap/Button";

// function Hero({ scrollToSection, bookingsRef }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="hero-section"
//       style={{ maxHeight: "800px", overflow: "hidden" }} // Reduced height
//     >
//       <Carousel fade interval={3000} className="carousel-container">
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://www.twinbrooksphysiotherapy.ca/wp-content/uploads/2021/04/footer-background.jpg"
//             alt="First slide"
//             style={{ height: "550px", objectFit: "cover" }} // Adjusted height
//           />
//           <Carousel.Caption>
//             <h3 className="carousel-title">Relaxing Massage</h3>
//             <p className="carousel-text">Feel the soothing touch with our relaxing massage services.</p>
//             <Button variant="primary" onClick={() => scrollToSection(bookingsRef)}>Book a Session</Button>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://www.easterncollege.ca/uploads/2022/02/what-is-massage-theraphy.jpg"
//             alt="Second slide"
//             style={{ height: "550px", objectFit: "cover" }}
//           />
//           <Carousel.Caption>
//             <h3 className="carousel-title">Deep Tissue Therapy</h3>
//             <p className="carousel-text">Relieve tension and stress with deep tissue therapy.</p>
//             <Button variant="primary" onClick={() => scrollToSection(bookingsRef)}>Book a Session</Button>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://images.ctfassets.net/hjcv6wdwxsdz/5cODDwoG5rBwrazOzL8jP0/fa75978750363b63fb1036d383d20490/black-man-smiling-getting-back-massage.jpg"
//             alt="Third slide"
//             style={{ height: "550px", objectFit: "cover" }}
//           />
//           <Carousel.Caption>
//             <h3 className="carousel-title">Body Care Packages</h3>
//             <p className="carousel-text">Special packages to renew your mind, body, and soul.</p>
//             <Button variant="primary" onClick={() => scrollToSection(bookingsRef)}>Book a Session</Button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </motion.div>
//   );
// }

// export default Hero;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";

function Hero({ scrollToSection, bookingsRef }) {
  const carouselItems = [
    {
      title: "Relaxing Massage Experience",
      subtitle: "Feel the soothing touch with our premium massage services",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3",
      highlight: "Starting at $50",
      features: ["Certified Therapists", "Mobile Service", "Luxury Experience"]
    },
    {
      title: "Deep Tissue Therapy",
      subtitle: "Relieve tension and stress with professional deep tissue therapy",
      image: "https://images.ctfassets.net/hjcv6wdwxsdz/5cODDwoG5rBwrazOzL8jP0/fa75978750363b63fb1036d383d20490/black-man-smiling-getting-back-massage.jpg",
      highlight: "Most Popular",
      features: ["Pain Relief", "Improved Mobility", "Rapid Recovery"]
    },
    {
      title: "Ultimate Wellness Package",
      subtitle: "Special packages to renew your mind, body, and soul",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3",
      highlight: "Premium Choice",
      features: ["Full Spa Experience", "Hot Stone Therapy", "Aromatherapy"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ position: "relative", height: "100vh", minHeight: "700px", overflow: "hidden" }}
    >
      <Carousel fade interval={5000} indicators={false} style={{ height: "100vh" }}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} style={{ height: "100vh" }}>
            <div style={{ position: "relative", height: "100vh" }}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
                style={{ height: "100vh", width: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)"
              }} />
            </div>
            <Carousel.Caption style={{ 
              bottom: "20%", 
              textAlign: "left",
              left: "10%",
              right: "10%",
              zIndex: 2
            }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div style={{ 
                  display: "inline-block",
                  background: "#8B5CF6",
                  padding: "5px 15px",
                  borderRadius: "50px",
                  marginBottom: "1rem",
                  fontSize: "0.9rem"
                }}>
                  {item.highlight}
                </div>
                <h1 className="display-3 fw-bold mb-3">{item.title}</h1>
                <p className="lead mb-4">{item.subtitle}</p>
                
                <div className="d-flex gap-3 mb-4">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="d-flex align-items-center">
                      <FaStar className="me-1" style={{ color: "#FFD700" }} size={12} />
                      <small>{feature}</small>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => scrollToSection(bookingsRef)}
                  style={{
                    background: "#8B5CF6",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                >
                  Book Your Session Now
                </Button>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div style={{
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 3
      }}>
        <div style={{
          display: "inline-block",
          background: "rgba(0,0,0,0.6)",
          padding: "10px 20px",
          borderRadius: "50px",
          backdropFilter: "blur(10px)",
          color: "white"
        }}>
          <FaStar className="me-1" style={{ color: "#FFD700" }} />
          <FaStar className="me-1" style={{ color: "#FFD700" }} />
          <FaStar className="me-1" style={{ color: "#FFD700" }} />
          <FaStar className="me-1" style={{ color: "#FFD700" }} />
          <FaStar className="me-2" style={{ color: "#FFD700" }} />
          <strong>Over 10,000+ Happy Clients</strong> ✨
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;