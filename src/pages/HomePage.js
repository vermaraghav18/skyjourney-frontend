// src/pages/HomePage.jsx

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeroSection from '../components/HeroSection';
import HotelBanner from '../components/HotelBanner';
import StudentCanadaBanner from '../components/StudentCanadaBanner';
import { Box } from '@mui/material';
import FeatureBanner from '../components/FeatureBanner';
import HotelPriceTabs from '../components/HotelPriceTabs';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyFlyBanner from '../components/WhyFlyBanner';


// Custom theme
const theme = createTheme({
  palette: {
    primary: { main: '#1a3a8f' },
    secondary: { main: '#ff6d00' },
    error: { main: '#d32f2f' },
    warning: { main: '#ffc107' },
    success: { main: '#2e7d32' },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 600, fontSize: '1.75rem' },
    h4: { fontWeight: 600, fontSize: '1.5rem' },
    h5: { fontWeight: 600, fontSize: '1.25rem' },
    h6: { fontWeight: 600, fontSize: '1rem' },
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeroSection />
      <HotelBanner />
      <Box sx={{ px: { xs: 2, md: 6 }, mt: 6 }}>
  <StudentCanadaBanner />
</Box>
<WhyFlyBanner />
<FeatureBanner />
<Box mt={6} mb={6}>
  <HotelPriceTabs />
</Box>
<WhyChooseUs />
    </ThemeProvider>
  );
};

export default HomePage;
