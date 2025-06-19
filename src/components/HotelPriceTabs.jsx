// src/components/HotelPriceTabs.jsx
import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, Paper } from '@mui/material';
import './HotelPriceTabs.css';

const cityData = [
  {
    name: 'Mumbai',
    image: '/images/mumbai.jpg',
    monthlyRates: [
      { name: 'June', price: '₹2,370 - ₹9,205' },
      { name: 'July', price: '₹2,570 - ₹9,560' },
      { name: 'Aug', price: '₹2,655 - ₹10,310' },
      { name: 'Sep', price: '₹2,770 - ₹10,775' },
      { name: 'Oct', price: '₹2,950 - ₹12,665' },
      { name: 'Nov', price: '₹2,975 - ₹13,310' },
      { name: 'Dec', price: '₹2,940 - ₹12,490' },
      { name: 'Jan', price: '₹3,040 - ₹12,290' },
    ],
  },
  {
    name: 'Delhi',
    image: '/images/delhi.jpg',
    monthlyRates: [
      { name: 'June', price: '₹2,100 - ₹7,900' },
      { name: 'July', price: '₹2,300 - ₹8,100' },
      { name: 'Aug', price: '₹2,450 - ₹8,700' },
      { name: 'Sep', price: '₹2,600 - ₹9,000' },
      { name: 'Oct', price: '₹2,900 - ₹10,500' },
      { name: 'Nov', price: '₹3,100 - ₹11,000' },
      { name: 'Dec', price: '₹3,300 - ₹11,500' },
      { name: 'Jan', price: '₹3,500 - ₹12,000' },
    ],
  },
  {
    name: 'Bengaluru',
    image: '/images/bengaluru.jpg',
    monthlyRates: [
      { name: 'June', price: '₹1,800 - ₹6,500' },
      { name: 'July', price: '₹2,000 - ₹6,800' },
      { name: 'Aug', price: '₹2,100 - ₹7,100' },
      { name: 'Sep', price: '₹2,300 - ₹7,500' },
      { name: 'Oct', price: '₹2,600 - ₹8,200' },
      { name: 'Nov', price: '₹2,800 - ₹8,900' },
      { name: 'Dec', price: '₹3,000 - ₹9,500' },
      { name: 'Jan', price: '₹3,200 - ₹9,800' },
    ],
  },
  {
    name: 'Chennai',
    image: '/images/chennai.jpg',
    monthlyRates: [
      { name: 'June', price: '₹1,600 - ₹5,800' },
      { name: 'July', price: '₹1,700 - ₹6,000' },
      { name: 'Aug', price: '₹1,800 - ₹6,300' },
      { name: 'Sep', price: '₹2,000 - ₹6,600' },
      { name: 'Oct', price: '₹2,200 - ₹7,200' },
      { name: 'Nov', price: '₹2,400 - ₹7,800' },
      { name: 'Dec', price: '₹2,600 - ₹8,500' },
      { name: 'Jan', price: '₹2,800 - ₹8,900' },
    ],
  },
  {
    name: 'Kolkata',
    image: '/images/kolkata.jpg',
    monthlyRates: [
      { name: 'June', price: '₹1,500 - ₹5,500' },
      { name: 'July', price: '₹1,650 - ₹5,800' },
      { name: 'Aug', price: '₹1,800 - ₹6,100' },
      { name: 'Sep', price: '₹2,000 - ₹6,400' },
      { name: 'Oct', price: '₹2,200 - ₹6,900' },
      { name: 'Nov', price: '₹2,400 - ₹7,400' },
      { name: 'Dec', price: '₹2,600 - ₹7,800' },
      { name: 'Jan', price: '₹2,800 - ₹8,100' },
    ],
  },
  {
    name: 'Hyderabad',
    image: '/images/hyderabad.jpg',
    monthlyRates: [
      { name: 'June', price: '₹1,700 - ₹6,200' },
      { name: 'July', price: '₹1,850 - ₹6,500' },
      { name: 'Aug', price: '₹2,000 - ₹6,900' },
      { name: 'Sep', price: '₹2,200 - ₹7,200' },
      { name: 'Oct', price: '₹2,400 - ₹7,900' },
      { name: 'Nov', price: '₹2,600 - ₹8,400' },
      { name: 'Dec', price: '₹2,800 - ₹9,000' },
      { name: 'Jan', price: '₹3,000 - ₹9,500' },
    ],
  },
  {
    name: 'Pune',
    image: '/images/pune.jpg',
    monthlyRates: [
      { name: 'June', price: '₹1,600 - ₹5,900' },
      { name: 'July', price: '₹1,750 - ₹6,200' },
      { name: 'Aug', price: '₹1,900 - ₹6,500' },
      { name: 'Sep', price: '₹2,100 - ₹6,800' },
      { name: 'Oct', price: '₹2,300 - ₹7,300' },
      { name: 'Nov', price: '₹2,500 - ₹7,800' },
      { name: 'Dec', price: '₹2,700 - ₹8,300' },
      { name: 'Jan', price: '₹2,900 - ₹8,600' },
    ],
  },
  {
    name: 'Jaipur',
    image: '/images/jaipur.jpg',
    monthlyRates: [
      { name: 'June', price: '₹1,500 - ₹5,200' },
      { name: 'July', price: '₹1,650 - ₹5,400' },
      { name: 'Aug', price: '₹1,800 - ₹5,700' },
      { name: 'Sep', price: '₹2,000 - ₹6,000' },
      { name: 'Oct', price: '₹2,300 - ₹6,500' },
      { name: 'Nov', price: '₹2,500 - ₹7,000' },
      { name: 'Dec', price: '₹2,700 - ₹7,500' },
      { name: 'Jan', price: '₹2,900 - ₹7,800' },
    ],
  },
  {
    name: 'Goa',
    image: '/images/goa.jpg',
    monthlyRates: [
      { name: 'June', price: '₹2,200 - ₹8,500' },
      { name: 'July', price: '₹2,400 - ₹8,900' },
      { name: 'Aug', price: '₹2,600 - ₹9,400' },
      { name: 'Sep', price: '₹2,800 - ₹9,900' },
      { name: 'Oct', price: '₹3,200 - ₹11,200' },
      { name: 'Nov', price: '₹3,500 - ₹12,000' },
      { name: 'Dec', price: '₹4,000 - ₹14,000' },
      { name: 'Jan', price: '₹4,300 - ₹15,000' },
    ],
  },
  {
    name: 'Ahmedabad',
    image: '/images/ahmedabad.jpg',
    monthlyRates: [
      { name: 'June', price: '₹1,400 - ₹4,900' },
      { name: 'July', price: '₹1,550 - ₹5,200' },
      { name: 'Aug', price: '₹1,700 - ₹5,500' },
      { name: 'Sep', price: '₹1,900 - ₹5,800' },
      { name: 'Oct', price: '₹2,100 - ₹6,200' },
      { name: 'Nov', price: '₹2,300 - ₹6,700' },
      { name: 'Dec', price: '₹2,500 - ₹7,000' },
      { name: 'Jan', price: '₹2,700 - ₹7,400' },
    ],
  },
];

const HotelPriceTabs = () => {
  const [activeCityIndex, setActiveCityIndex] = useState(0);
  return (
    <Box className="hotel-tabs-wrapper">
      <Typography className="hotel-tab-heading">
        Discover the best time to book your next stay
      </Typography>
      <Tabs
        value={activeCityIndex}
        onChange={(e, v) => setActiveCityIndex(v)}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        className="hotel-tab-bar"
        indicatorColor="primary"
      >
        {cityData.map((c) => <Tab key={c.name} label={c.name} />)}
      </Tabs>

      <Paper elevation={3} className="hotel-tab-panel">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={cityData[activeCityIndex].image}
              alt={cityData[activeCityIndex].name}
              className="hotel-tab-image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="hotel-price-scrollbox">
              {cityData[activeCityIndex].monthlyRates.map((m) => (
                <Box key={m.name} className="month-price-card">
                  <Typography>{m.name}</Typography>
                  <Typography>{m.price}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HotelPriceTabs;
