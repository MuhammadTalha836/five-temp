
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import NavBar from './New/components/NavBar';
import HomeSection from './New/components/HomeSection';
import Facts from './New/components/Facts';
import Services from './New/components/Services';
import Bolgs from './New/components/Bolgs';
import Team from './New/components/Team';
import Portfolio from './New/components/Portfolio';
import Contact from './New/components/Contact';

function App() {

  //for page animations 
  const [windowDim, SetwindowDim] = useState({ width: window.innerWidth, Height: window.innerHeight });

  const detectSize = () => {
    SetwindowDim({ width: window.innerWidth, Height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.addEventListener('resize', detectSize)
    };
  }, [windowDim]);


  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },);



  return (
    <div style={{ margin: "0", padding: "0" }}>
      <NavBar/>
      <HomeSection />
      <Services/>
      <Facts />
      <Bolgs/>
      <Team/>
      <Portfolio />
      <Contact/>
    </div>
  );
}

export default App;