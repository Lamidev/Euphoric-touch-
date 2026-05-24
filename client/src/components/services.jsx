// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaSpa, FaHandsHelping, FaHeartbeat, FaFire, FaKissWinkHeart, FaMapMarkerAlt } from "react-icons/fa";
// import ServicesCard from "../components/services-card";

// const services = [
//   {
//     title: "Swedish Massage",
//     description: "Relaxing full-body massage to relieve tension and stress.",
//     icon: FaSpa,
//   },
//   {
//     title: "Deep Tissue Massage",
//     description: "Targets deeper layers of muscles to alleviate pain and stiffness.",
//     icon: FaHandsHelping,
//   },
//   {
//     title: "Aromatherapy Massage",
//     description: "Uses essential oils to enhance relaxation and well-being.",
//     icon: FaHeartbeat,
//   },
//   {
//     title: "Hot Stone Massage",
//     description: "Smooth heated stones are used to ease muscle tension and promote relaxation.",
//     icon: FaFire,
//   },
//   {
//     title: "Nuru Massage",
//     description: "A unique and sensual massage using special gel for deep relaxation and stress relief.",
//     icon: FaKissWinkHeart, 
//   },
//   {
//     title: "Masseuses Across the Country",
//     description: "Fresha Massage Spa & Wellness & Wellness& Wellnesshas certified masseuses in different states, ready to provide professional massage experiences wherever you are.",
//     icon: FaMapMarkerAlt,
//   },
// ];

// const Services = React.forwardRef((props, ref) => {
//   return (
//     <Container ref={ref} className="py-5">
//       <h2 className="text-center mb-4">Our Services</h2>
//       <Row className="justify-content-center">
//         {services.map((service, index) => (
//           <Col key={index} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
//             <ServicesCard {...service} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// });

// export default Services;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaSpa, FaHandsHelping, FaHeartbeat, FaFire, FaKissWinkHeart, 
  FaMapMarkerAlt, FaFutbol, FaLeaf, FaFeather, FaChild, 
  FaHotTub, FaHandSparkles, FaRunning, FaGem, FaSeedling,
  FaUserMd, FaHands, FaYinYang, FaBabyCarriage
} from "react-icons/fa";
import ServicesCard from "../components/services-card";

const services = [
  // Core Massage Styles
  {
    title: "Swedish Massage",
    description: "A gentle, full-body massage using long, gliding strokes. Ideal for beginners and stress relief.",
    icon: FaSpa,
    category: "Core Massage Styles"
  },
  {
    title: "Deep Tissue Massage",
    description: "Targets deeper muscle layers and connective tissues to release chronic knots and stiffness.",
    icon: FaHandsHelping,
    category: "Core Massage Styles"
  },
  {
    title: "Sports Massage",
    description: "Designed for athletes. Combines stretching and deep pressure to prevent injuries and aid recovery.",
    icon: FaRunning,
    category: "Core Massage Styles"
  },
  {
    title: "Hot Stone Massage",
    description: "Heated, smooth stones are placed on the body or used as massage tools to warm and loosen tight muscles.",
    icon: FaFire,
    category: "Core Massage Styles"
  },

  // Specialized Massages
  {
    title: "Aromatherapy Massage",
    description: "Integrates the physical benefits of massage with specific essential oils to enhance mental and emotional well-being.",
    icon: FaLeaf,
    category: "Specialized Massages"
  },
  {
    title: "Reflexology",
    description: "Applies finger pressure to targeted zones on the feet, hands, or ears to promote overall healing.",
    icon: FaGem,
    category: "Specialized Massages"
  },
  {
    title: "Shiatsu Massage",
    description: "A Japanese technique using rhythmic finger and palm pressure along energy pathways to restore balance.",
    icon: FaYinYang,
    category: "Specialized Massages"
  },
  {
    title: "Thai Massage",
    description: "An active, yoga-like experience combining acupressure, joint mobilization, and deep stretching.",
    icon: FaHandSparkles,
    category: "Specialized Massages"
  },
  {
    title: "Prenatal Massage",
    description: "Tailored to relieve pregnancy discomforts like lower back pain and swelling.",
    icon: FaBabyCarriage,
    category: "Specialized Massages"
  },

  // Other Massage Services
  {
    title: "Hot Tub - Nuru Massage",
    description: "A unique and sensual experience combining warm hydrotherapy with specialized gel for deep relaxation and stress relief.",
    icon: FaHotTub,
    category: "Other Services"
  },
  {
    title: "Body Rubs",
    description: "Relaxing full-body rubs designed to release tension, improve circulation, and promote overall well-being.",
    icon: FaHands,
    category: "Other Services"
  },
  {
    title: "Masseuses Across the Country",
    description: "Fresha Massage Spa & Wellness has certified masseuses in different states, ready to provide professional massage experiences wherever you are.",
    icon: FaMapMarkerAlt,
    category: "Other Services"
  }
];

// Group services by category
const groupedServices = services.reduce((groups, service) => {
  const category = service.category;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(service);
  return groups;
}, {});

const Services = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="py-5">
      <h2 className="text-center mb-2">Our Services</h2>
      <p className="text-center text-muted mb-5">Discover the perfect massage tailored to your needs</p>
      
      {Object.entries(groupedServices).map(([category, categoryServices], categoryIndex) => (
        <div key={categoryIndex} className="mb-5">
          <h3 className="text-center mb-4" style={{ color: '#8B5CF6' }}>
            {category}
            <div className="mx-auto mt-2" style={{ width: '50px', height: '3px', background: '#8B5CF6' }}></div>
          </h3>
          <Row className="justify-content-center">
            {categoryServices.map((service, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
                <ServicesCard {...service} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
});

export default Services;
