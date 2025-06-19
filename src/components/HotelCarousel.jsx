// src/components/HotelCarousel.jsx
import React from 'react';
import HotelCard from './HotelCard';
import './HotelCarousel.css';

const HotelCarousel = ({ hotels }) => {
  return (
    <div className="hotel-carousel-container">
      <div className="hotel-carousel">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelCarousel;
