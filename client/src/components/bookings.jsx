// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Accordion, Toast, ToastContainer } from "react-bootstrap";

// const Booking = React.forwardRef((props, ref) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     sessionType: "",
//     date: "",
//     time: "",
//     specialRequest: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState({ show: false, message: "", variant: "success" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/bookings`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setToast({ show: true, message: "Your session has been booked successfully!", variant: "success" });

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           sessionType: "",
//           date: "",
//           time: "",
//           specialRequest: "",
//         });
//       } else {
//         setToast({ show: true, message: data.message || "Something went wrong. Please try again.", variant: "danger" });
//       }
//     } catch (error) {
//       console.error("Error booking session:", error);
//       setToast({ show: true, message: "Failed to book session. Please try again later.", variant: "danger" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div ref={ref} className="py-5 bg-light">
//       <Container>
//         <h2 className="text-center text-dark mb-4">Book a Massage Session</h2>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <Form onSubmit={handleSubmit}>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter your email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Phone Number</Form.Label>
//                     <Form.Control
//                       type="tel"
//                       placeholder="Enter your phone number"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Session Type</Form.Label>
//                     <Form.Select
//                       name="sessionType"
//                       value={formData.sessionType}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select a session</option>
//                       <option value="Swedish Massage">Swedish Massage</option>
//                       <option value="Deep Tissue Massage">Deep Tissue Massage</option>
//                       <option value="Aromatherapy Massage">Aromatherapy Massage</option>
//                       <option value="Hot Stone Massage">Hot Stone Massage</option>
//                       <option value="Nuru Massage">Nuru Massage</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Preferred Date</Form.Label>
//                     <Form.Control
//                       type="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Preferred Time</Form.Label>
//                     <Form.Control
//                       type="time"
//                       name="time"
//                       value={formData.time}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Form.Group className="mb-3">
//                 <Form.Label>Special Requests</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Any preferences or special requests?"
//                   name="specialRequest"
//                   value={formData.specialRequest}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <div className="text-center">
//                 <Button variant="primary" type="submit" disabled={loading}>
//                   {loading ? "Booking..." : "Confirm Booking"}
//                 </Button>
//               </div>
//             </Form>
//           </Col>
//         </Row>

        
//      {/* Toast Notification */}
//      <ToastContainer className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>

//   <Toast
//     onClose={() => setToast({ ...toast, show: false })}
//     show={toast.show}
//     delay={3000}
//     autohide
//     bg={toast.variant}
//   >
//     <Toast.Body className="text-white">{toast.message}</Toast.Body>
//   </Toast>
// </ToastContainer>


//         {/* Policies Accordion */}
//         <Accordion className="mt-4">
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>Cancellation & Rescheduling Policy</Accordion.Header>
//             <Accordion.Body>
//               Appointments must be canceled or rescheduled at least 24 hours in advance. Late cancellations may result in a partial charge or loss of deposit.
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="1">
//             <Accordion.Header>Health & Safety Disclaimer</Accordion.Header>
//             <Accordion.Body>
//               Massages are for therapeutic and relaxation purposes only. We do not diagnose or treat medical conditions. Please inform the therapist of any health concerns.
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="2">
//             <Accordion.Header>Client Conduct & Ethics</Accordion.Header>
//             <Accordion.Body>
//               Clients must maintain proper hygiene and respectful behavior. Any inappropriate behavior will result in immediate termination of the session with no refund.
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </Container>
//     </div>
//   );
// });

// export default Booking;


import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Accordion, Toast, ToastContainer, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaComment, FaStar, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const Booking = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    date: "",
    time: "",
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", variant: "success" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setToast({ show: true, message: "Your session has been booked successfully!", variant: "success" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          sessionType: "",
          date: "",
          time: "",
          specialRequest: "",
        });
      } else {
        setToast({ show: true, message: data.message || "Something went wrong. Please try again.", variant: "danger" });
      }
    } catch (error) {
      console.error("Error booking session:", error);
      setToast({ show: true, message: "Failed to book session. Please try again later.", variant: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref} className="py-5" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-white mb-3">Book Your Experience</h2>
          <p className="lead text-white">Reserve your spot for ultimate relaxation</p>
          <div className="mx-auto" style={{ width: '60px', height: '3px', background: '#fff' }}></div>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        <FaUser className="me-2" style={{ color: "#8B5CF6" }} /> Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          border: "2px solid #e0e0e0",
                          borderRadius: "12px",
                          padding: "0.75rem 1rem",
                          transition: "all 0.3s ease"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#8B5CF6"}
                        onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        <FaEnvelope className="me-2" style={{ color: "#8B5CF6" }} /> Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          border: "2px solid #e0e0e0",
                          borderRadius: "12px",
                          padding: "0.75rem 1rem"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#8B5CF6"}
                        onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        <FaPhone className="me-2" style={{ color: "#8B5CF6" }} /> Phone Number
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                          border: "2px solid #e0e0e0",
                          borderRadius: "12px",
                          padding: "0.75rem 1rem"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#8B5CF6"}
                        onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        <FaHandsHelping className="me-2" style={{ color: "#8B5CF6" }} /> Session Type
                      </Form.Label>
                      <Form.Select
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleChange}
                        required
                        style={{
                          border: "2px solid #e0e0e0",
                          borderRadius: "12px",
                          padding: "0.75rem 1rem"
                        }}
                      >
                        <option value="">Select a session</option>
                        <option value="30 mins Massage">30 mins Massage - $50</option>
                        <option value="60 mins Massage">60 mins Massage - $75</option>
                        <option value="90 mins Massage">90 mins Massage - $100</option>
                        <option value="120 mins Massage">120 mins Massage - $130</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        <FaCalendarAlt className="me-2" style={{ color: "#8B5CF6" }} /> Preferred Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        style={{
                          border: "2px solid #e0e0e0",
                          borderRadius: "12px",
                          padding: "0.75rem 1rem"
                        }}
                        min={new Date().toISOString().split('T')[0]}
                        onFocus={(e) => e.target.style.borderColor = "#8B5CF6"}
                        onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        <FaClock className="me-2" style={{ color: "#8B5CF6" }} /> Preferred Time
                      </Form.Label>
                      <Form.Control
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        style={{
                          border: "2px solid #e0e0e0",
                          borderRadius: "12px",
                          padding: "0.75rem 1rem"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#8B5CF6"}
                        onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">
                    <FaComment className="me-2" style={{ color: "#8B5CF6" }} /> Special Requests
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Any preferences, health concerns, or special requests?"
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    style={{
                      border: "2px solid #e0e0e0",
                      borderRadius: "12px",
                      padding: "0.75rem 1rem"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#8B5CF6"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={loading}
                    style={{
                      background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                      border: "none",
                      padding: "12px 40px",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      fontSize: "1.1rem"
                    }}
                  >
                    {loading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Processing...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </div>
              </Form>
            </motion.div>

            <Accordion className="mt-4" style={{ borderRadius: "15px", overflow: "hidden" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaShieldAlt className="me-2" style={{ color: "#8B5CF6" }} />
                  Cancellation & Rescheduling Policy
                </Accordion.Header>
                <Accordion.Body>
                  Appointments must be canceled or rescheduled at least 24 hours in advance. 
                  Late cancellations may result in a partial charge or loss of deposit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Health & Safety Disclaimer</Accordion.Header>
                <Accordion.Body>
                  Massages are for therapeutic and relaxation purposes only. 
                  We do not diagnose or treat medical conditions. 
                  Please inform the therapist of any health concerns before the session begins.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Client Conduct & Ethics</Accordion.Header>
                <Accordion.Body>
                  Clients must maintain proper hygiene and respectful behavior. 
                  Any inappropriate behavior will result in immediate termination of the session with no refund.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <ToastContainer className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
          <Toast
            onClose={() => setToast({ ...toast, show: false })}
            show={toast.show}
            delay={3000}
            autohide
            bg={toast.variant}
          >
            <Toast.Body className="text-white">{toast.message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </div>
  );
});

export default Booking;