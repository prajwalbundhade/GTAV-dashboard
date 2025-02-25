import React, { useState } from 'react';
import DarkCard from './DarkCard';
import './PageContent.css';

const PageContent = ({ cardsData }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [...new Set(cardsData.map(card => card.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cardsData.filter(card => {
    const cardTitle = card.title || '';
    const cardDescription = card.description || '';
    return (selectedCategory === 'All' || card.category === selectedCategory) &&
           (cardTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
            cardDescription.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column mb-3">
        <div className="col search">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search here.." 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
        </div>
        <div className="btn-group mobile-style" role="group">
          {categories.map((category, index) => (
            <button 
              key={index} 
              type="button" 
              className={`btn mobile-btn-gap ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`} 
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="row">
        {filteredCards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <DarkCard data={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageContent;
