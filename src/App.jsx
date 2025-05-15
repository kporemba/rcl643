import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import BranchInfo from "./pages/BranchInfo/BranchInfo.jsx";
import Contact from "./pages/ContactInfo/Contact.jsx";
import Cadets from "./pages/Cadets/Cadets.jsx";
import DavidHornell from "./pages/DavidHornell/DavidHornell.jsx";
import Streight from "./pages/Streight/Streight.jsx";
import History from "./pages/History/History.jsx";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery.jsx";
import Events from "./pages/Events/Events.jsx";
import PhotoTemplate from "./pages/PhotoTemplate/PhotoTemplate.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Veterans from "./pages/Veterans/Veterans.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/branch-info" element={<BranchInfo />} />
          <Route path="/cadets" element={<Cadets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history/david-hornell" element={<DavidHornell />} />
          <Route path="/history/streight" element={<Streight />} />
          <Route path="/history" element={<History />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<PhotoTemplate />} />
          <Route path="/veterans" element={<Veterans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
