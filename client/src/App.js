import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SNavbar from './components/Navbar/SNavbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import useScrollFx from './hooks/useScrollFx';

// Each page is downloaded only when it is visited
const HomeComponent = lazy(() => import('./components/FAQS/HomeComponent'));
const Classess = lazy(() => import('./components/Classess/Classess'));
const Instructors = lazy(() => import('./components/Instructors/Instructors'));
const VideoPart = lazy(() => import('./components/Videopart/VideoPart'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const ClassDetail = lazy(() => import('./components/ClassesDetails/ClassDetail'));
const ContactUs = lazy(() => import('./components/ContactFoam/ContactUs'));

const TITLES = {
  '/classes': 'Classes',
  '/team': 'Our Team',
  '/about-us': 'About Us',
  '/gallery': 'Gallery',
  '/strength': 'Strength & Sweat',
  '/burnout': 'Total Body Burnout',
  '/bootcamp': 'Bootcamp Challenge',
  '/contact_us': 'Contact Us',
};

// Start every page at the top and give it its own browser-tab title
function PageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    const t = TITLES[pathname.toLowerCase()];
    document.title = t ? `${t} | SPYRO GYM` : 'SPYRO GYM - Get Stronger, Healthier, and Fitter';
  }, [pathname, hash]);
  return null;
}

function BannerWrapper({ children }) {
  const { pathname } = useLocation();
  const showBanner = pathname.toLowerCase() !== '/contact_us';
  return (
    <>
      {showBanner && <div id="banner"><Banner /></div>}
      {children}
    </>
  );
}

const PageFallback = () => <div className="min-h-[60vh] bg-ink" aria-busy="true" />;

function Shell() {
  const rootRef = useRef(null);
  const { pathname } = useLocation();
  useScrollFx(rootRef, pathname);
  return (
    <div ref={rootRef}>
      <PageEffects />
      <SNavbar />
      <main>
        <BannerWrapper>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/Classes" element={<Classess showSeeAll={false} />} />
              <Route path="/team" element={<Instructors />} />
              <Route path="/about-us" element={<VideoPart />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/Strength" element={<ClassDetail slug="Strength" />} />
              <Route path="/BurnOut" element={<ClassDetail slug="BurnOut" />} />
              <Route path="/BootCamp" element={<ClassDetail slug="BootCamp" />} />
              <Route path="/contact_us" element={<ContactUs />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BannerWrapper>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Shell />
    </Router>
  );
}

export default App;
