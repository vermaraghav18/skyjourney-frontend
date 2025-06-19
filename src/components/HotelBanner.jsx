// client/components/HotelBanner.jsx
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HotelCard from './HotelCard';
import hotel1 from '../assets/hotels/hotel1.jpg';

const hotels = [
  {
    name: "Taj Bangalore",
    location: "Kempegowda Intl Airport",
    price: 13000,
    stars: 5,
    image: hotel1
  },
  {
    name: "The Lalit Ashok",
    location: "Seshadripuram",
    price: 10950,
    stars: 4,
    image: hotel1
  },
  {
    name: "Welcomhotel by ITC",
    location: "Richmond Road",
    price: 8333,
    stars: 5,
    image: hotel1
  },
  {
    name: "ESSOTTO Hub",
    location: "KIADB Export Area",
    price: 208,
    stars: 3,
    image: hotel1
  },
  {
    name: "Radisson Blu",
    location: "Outer Ring Road",
    price: 10250,
    stars: 5,
    image: hotel1
  },
  {
    name: "ITC Windsor",
    location: "Golf Course Road",
    price: 9400,
    stars: 4,
    image: hotel1
  },
  {
    name: "JW Marriott",
    location: "Vittal Mallya Road",
    price: 11800,
    stars: 5,
    image: hotel1
  }
];

const HotelBanner = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -250 : 250,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      sx={{
        background: '#fff',
        borderRadius: 3,
        p: 5,
        mt: 3,
        mx: 'auto',
        boxShadow: 1,
        width: '95%',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box>
          <Typography variant="h6" fontWeight="bold">For your stay in Bangalore</Typography>
          <Typography variant="body2" color="text.secondary">
            Thu, 19 Jun 25 – Sun, 22 Jun 25
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" fontWeight="bold" sx={{ mr: 1 }}>VIEW ALL</Typography>
          <IconButton onClick={() => scroll('left')}><ArrowBackIosIcon fontSize="small" /></IconButton>
          <IconButton onClick={() => scroll('right')}><ArrowForwardIosIcon fontSize="small" /></IconButton>
        </Box>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {hotels.map((hotel, idx) => (
          <HotelCard key={idx} hotel={hotel} />
        ))}
      </Box>
    </Box>
  );
};

export default HotelBanner;
