import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import SpecialOffers from './components/SpecialOffers';
import OrderSection from './components/OrderSection';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <Header />
      <main>
        <Hero />
        <MenuHighlights />
        <SpecialOffers />
        <OrderSection />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;