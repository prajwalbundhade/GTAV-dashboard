import React, { useState, useEffect } from 'react';
import TopBar from './Components/TopBar/TopBar';
import PageContent from './Components/PageContent/PageContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { cardsData } from './Data/CardData';
import PopupModal from './Components/PopupModal/PopupModal';
import About from './Components/About/About';
import TermsAndCondition from './Components/TermsAndCondition/TermsAndCondition';
import ContactPage from './Components/Contact/Contact';



function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // modal 
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
      localStorage.setItem('hasSeenModal', 'true');
    }
  }, []);

  const handleClose = () => setShowModal(false);
  
  return (
     <Router>
     <div className='app'>
       <TopBar />
       
       <Routes>
       <Route path="/" element={<PageContent cardsData={cardsData}/>} />
       <Route path="/about" element={<About />} />
       <Route path="/terms" element={<TermsAndCondition />} />
       <Route path="/contact" element={<ContactPage />} />
       </Routes>
       <PopupModal show={showModal} handleClose={handleClose} />
     </div>
   </Router>
  )
}

export default App
