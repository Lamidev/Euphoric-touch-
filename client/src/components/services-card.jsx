// import React from "react";
// import { Card } from "react-bootstrap";
// import { motion } from "framer-motion";

// const ServicesCard = ({ title, description, icon: Icon }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="mb-4"
//     >
//       <Card className="text-center shadow-lg p-3">
//         <Card.Body>
//           {Icon && <Icon size={50} className="mb-3 text-primary" />}
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//         </Card.Body>
//       </Card>
//     </motion.div>
//   );
// };

// export default ServicesCard;

import React, { useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaClock, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const ServicesCard = ({ title, description, icon: Icon, duration, price, features, popular }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="mb-4"
      style={{ height: "100%" }}
    >
      <Card 
        className="text-center h-100"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: "none",
          background: "#fff",
          boxShadow: isHovered 
            ? "0 20px 40px rgba(139, 92, 246, 0.2)" 
            : "0 10px 30px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          position: "relative"
        }}
      >
        {popular && (
          <div style={{
            position: "absolute",
            top: "20px",
            right: "-30px",
            background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            color: "#333",
            padding: "5px 40px",
            transform: "rotate(45deg)",
            fontSize: "12px",
            fontWeight: "bold",
            zIndex: 1,
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
          }}>
            <FaStar className="me-1" /> MOST POPULAR
          </div>
        )}
        
        <div style={{
          padding: "2rem 1rem 1rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden"
        }}>
          <motion.div
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 360 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            {Icon && <Icon size={60} className="mb-3" />}
          </motion.div>
          <Card.Title className="fs-3 fw-bold mb-2">{title}</Card.Title>
          {price && (
            <div className="mt-2">
              <span className="display-6 fw-bold">${price}</span>
              {duration && <span className="text-white-50"> / {duration}</span>}
            </div>
          )}
        </div>
        
        <Card.Body className="p-4">
          <AnimatePresence>
            {isHovered ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {features && features.length > 0 && (
                  <div className="text-start">
                    <h6 className="fw-bold mb-3">✨ What's Included:</h6>
                    {features.map((feature, idx) => (
                      <div key={idx} className="mb-2 d-flex align-items-center">
                        <FaCheckCircle className="me-2 text-success" size={14} />
                        <small>{feature}</small>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card.Text className="text-muted">
                  {description}
                </Card.Text>
                {duration && !price && (
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <FaClock style={{ color: "#8B5CF6" }} />
                    <small className="text-muted">{duration}</small>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3"
            >
            </motion.div>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ServicesCard;