import React from 'react';
import { Box, Typography, Button, Grid, Paper, styled } from '@mui/material';
import { School, Stars, Groups, SportsSoccer } from '@mui/icons-material';

const Banner = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)',
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

const SchoolBanner = () => {
  return (
    <Banner elevation={4}>
      <Grid container>
        <Grid item xs={12} md={7} p={3}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            <Box component="span" color="#ffeb3b">Quality Education</Box> at Mayor World School
          </Typography>
          
          <Typography variant="body2" paragraph sx={{ opacity: 0.9, mb: 2 }}>
            CBSE-affiliated school in Jalandhar with holistic development approach
          </Typography>
          
          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
            <FeatureItem icon={<School />} text="CBSE Curriculum" />
            <FeatureItem icon={<Stars />} text="Academic Excellence" />
            <FeatureItem icon={<Groups />} text="Qualified Faculty" />
            <FeatureItem icon={<SportsSoccer />} text="Sports Facilities" />
          </Box>
          
          <Button 
            variant="contained" 
            sx={{
              bgcolor: '#ffeb3b',
              color: '#2e7d32',
              fontWeight: 600,
              '&:hover': { bgcolor: 'white' }
            }}
          >
            Admission Enquiry
          </Button>
        </Grid>
        
        <Grid item xs={12} md={5} sx={{
          minHeight: 200,
          background: 'url(https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80) center/cover',
        }} />
      </Grid>
    </Banner>
  );
};

export default SchoolBanner;