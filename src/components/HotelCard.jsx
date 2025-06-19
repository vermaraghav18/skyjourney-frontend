// src/components/HotelCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="hotel-image"
      />
      <div className="hotel-content">
        <div>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {hotel.name}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            {hotel.location}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2">
            ₹{hotel.price.toLocaleString()} <Typography component="span" fontSize="0.75rem">per night</Typography>
          </Typography>
          <Box className="hotel-stars">
            {Array(hotel.stars).fill().map((_, i) => (
              <StarIcon key={i} sx={{ fontSize: 18, color: '#FFD700' }} />
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
