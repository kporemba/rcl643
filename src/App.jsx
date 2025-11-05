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
import BranchHistory from "./pages/BranchHistory/BranchHistory.jsx";

import Branch3 from "./pages/Branch3/Branch3.jsx";
import Branch101 from "./pages/Branch101/Branch101.jsx";
import Branch210 from "./pages/Branch210/Branch210.jsx";
import Branch213 from "./pages/Branch213/Branch213.jsx";
import Branch217 from "./pages/Branch217/Branch217.jsx";
import Branch266 from "./pages/Branch266/Branch266.jsx";
import Branch286 from "./pages/Branch286/Branch286.jsx";
import Branch528 from "./pages/Branch528/Branch528.jsx";
import { useState } from "react";

function App() {
  const [hideFooter, setHideFooter] = useState(false);
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
          <Route
            path="/events"
            element={<Events setHideFooter={setHideFooter} />}
          />
          <Route path="/event/:id" element={<PhotoTemplate />} />
          <Route path="/veterans" element={<Veterans />} />
          <Route path="/history/branch-summary" element={<BranchHistory />} />
          <Route path="/history/branch3" element={<Branch3 />} />
          <Route path="/history/branch101" element={<Branch101 />} />
          <Route path="/history/branch210" element={<Branch210 />} />
          <Route path="/history/branch213" element={<Branch213 />} />
          <Route path="/history/branch217" element={<Branch217 />} />
          <Route path="/history/branch266" element={<Branch266 />} />
          <Route path="/history/branch286" element={<Branch286 />} />
          <Route path="/history/branch528" element={<Branch528 />} />
        </Routes>
        {!hideFooter && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
