// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";

// const NavBar = ({ scrollToSection, homeRef, aboutRef, servicesRef, bookingsRef, pricingRef }) => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand href="#">Fresha Massage Spa & Wellness</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link onClick={() => scrollToSection(homeRef)}>Home</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection(aboutRef)}>About</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection(servicesRef)}>Services</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection(pricingRef)}>Pricing</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection(bookingsRef)}>Bookings</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaSpa, FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ scrollToSection, homeRef, aboutRef, servicesRef, bookingsRef, pricingRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setExpanded(false);
  };

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Services", ref: servicesRef },
    { name: "Pricing", ref: pricingRef },
    { name: "Book Now", ref: bookingsRef, isButton: true }
  ];

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      style={{
        background: scrolled 
          ? "rgba(15, 15, 15, 0.95)" 
          : "rgba(15, 15, 15, 0.8)",
        backdropFilter: "blur(10px)",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#" 
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => handleNavClick(homeRef)}
        >
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            style={{ marginRight: "10px" }}
          >
            <FaSpa style={{ color: "#8B5CF6", fontSize: "1.8rem" }} />
          </motion.div>
          <div>
            <span style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "1.5rem",
              fontWeight: "800"
            }}>
              Fresha Massage
            </span>
            <span style={{ fontSize: "0.8rem", display: "block", color: "#fff" }}>
              Spa & Wellness
            </span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          style={{ border: "none" }}
        >
          {expanded ? (
            <FaTimes style={{ color: "#fff", fontSize: "1.5rem" }} />
          ) : (
            <FaBars style={{ color: "#fff", fontSize: "1.5rem" }} />
          )}
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.isButton ? (
                  <Button
                    onClick={() => handleNavClick(item.ref)}
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                      border: "none",
                      borderRadius: "50px",
                      padding: "8px 25px",
                      margin: "0 10px",
                      fontWeight: "600",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <Nav.Link
                    onClick={() => handleNavClick(item.ref)}
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      margin: "0 0.5rem",
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    className="nav-link-custom"
                  >
                    {item.name}
                  </Nav.Link>
                )}
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .nav-link-custom {
            position: relative;
          }
          
          .nav-link-custom::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          
          .nav-link-custom:hover::after {
            width: 80%;
          }
          
          .nav-link-custom:hover {
            color: #8B5CF6 !important;
            transform: translateY(-2px);
          }
          
          @media (max-width: 768px) {
            .navbar-brand {
              font-size: 1.2rem;
            }
            
            .nav-link-custom {
              text-align: center;
              padding: 10px 0;
            }
            
            .btn {
              margin: 10px auto !important;
              display: inline-block;
              width: auto;
            }
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavBar;