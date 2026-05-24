import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage";
import Footer from "./components/footer";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const whatsappUrl = "https://wa.me/18644997958?text=Hello!%20I'm%20interested%20in%20booking%20a%20massage%20session.";

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
