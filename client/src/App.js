import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Classess from './components/Classess/Classess';
import Instructors from './components/Instructors/Instructors';
import SNavbar from './components/Navbar/SNavbar';
import VideoPart from './components/Videopart/VideoPart';
import Footer from './components/Footer/Footer';
import HomeComponent from './components/FAQS/HomeComponent';
import Strength from './components/ClassesDetails/Strength';
import BurnOut from './components/ClassesDetails/BurnOut';
import BootCamp from './components/ClassesDetails/BootCamp';
import ContactUs from './components/ContactFoam/ContactUs';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <Router>
      <SNavbar />
      <BannerWrapper>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/Classes" element={<Classess />} />
          <Route path="/team" element={<Instructors />} />
          <Route path="/about-us" element={<VideoPart />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Strength" element={<Strength />} />
          <Route path="/BurnOut" element={<BurnOut />} />
          <Route path="/BootCamp" element={<BootCamp />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </BannerWrapper>
      <Footer />
    </Router>
  );
}

function BannerWrapper({ children }) {
  const location = useLocation();
  const showBanner = location.pathname !== '/contact_us';

  return (
    <React.Fragment>
      {showBanner && <div id="banner"><Banner /></div>}
      {children}
    </React.Fragment>
  );
}

export default App;