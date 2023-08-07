import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  
  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
  };

  return (
    <div className="portfoliocontainer d-flex flex-column">
     
      <Header/>
      <NavTabs currentPage={currentPage} handlePageChange={setCurrentPage} />
      
      {renderPage()}
      <Footer/>
    </div>
  );
}
