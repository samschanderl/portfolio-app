// imports
import { useState } from 'react';

// styles
import './App.css';


// import components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Footer from './components/Footer';
import PortfolioSlider from './components/PortfolioSlider';
import Modal from './components/Modal';

// import context
import StateProvider  from './contexts/StateContext';
import { useStateContext } from './contexts/StateContext';

// animate css
import 'animate.css'

function App() {

  return (
    <div className="App">
      <StateProvider>
        <Navbar />
        <Banner/>
        <Skills />
        <PortfolioSlider />
        <Modal />

        <Footer />
      </StateProvider>
    </div>
  );
}

export default App;
