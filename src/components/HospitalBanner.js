import React from 'react';
import { Box, Typography, Button, Grid, Paper, styled } from '@mui/material';
import { LocalHospital, MedicalServices, Favorite, AirlineSeatFlat } from '@mui/icons-material';

const Banner = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #d32f2f 0%, #f44336 100%)',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  color: 'white',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[8],
  },
}));

const FeatureItem = ({ icon, text }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'rgba(255,255,255,0.2)',
    px: 1.5,
    py: 1,
    borderRadius: 1,
    fontSize: '0.8rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    '&:hover': {
      bgcolor: 'rgba(255,255,255,0.3)',
      transform: 'translateY(-2px)',
    },
  }}>
    <Box sx={{ color: '#ffeb3b', mr: 1 }}>{icon}</Box>
    {text}
  </Box>
);

const HospitalBanner = () => {
  return (
    <Banner elevation={4}>
      <Grid container>
        <Grid item xs={12} md={7} p={3}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            <Box component="span" color="#ffeb3b">Advanced Healthcare</Box> at NHS Superspeciality
          </Typography>
          
          <Typography variant="body2" paragraph sx={{ opacity: 0.9, mb: 2 }}>
            Jalandhar's leading multi-speciality hospital with cutting-edge facilities
          </Typography>
          
          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
            <FeatureItem icon={<LocalHospital />} text="24/7 Emergency" />
            <FeatureItem icon={<MedicalServices />} text="Modern Equipment" />
            <FeatureItem icon={<Favorite />} text="Patient Care" />
            <FeatureItem icon={<AirlineSeatFlat />} text="Ambulance" />
          </Box>
          
          <Button 
            variant="contained" 
            sx={{
              bgcolor: '#ffeb3b',
              color: '#d32f2f',
              fontWeight: 600,
              '&:hover': { bgcolor: 'white' }
            }}
          >
            Book Appointment
          </Button>
        </Grid>
        
        <Grid item xs={12} md={5} sx={{
          minHeight: 200,
          background: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80) center/cover',
        }} />
      </Grid>
    </Banner>
  );
};

export default HospitalBanner;