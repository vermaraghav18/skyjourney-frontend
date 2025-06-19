import React from 'react';
import { Box, Typography, Button, Grid, Paper, styled } from '@mui/material';
import { School, Public, CheckCircle, Support } from '@mui/icons-material';

const Banner = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a3a8f 0%, #0d6efd 100%)',
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
    <Box sx={{ color: '#ffcc00', mr: 1 }}>{icon}</Box>
    {text}
  </Box>
);

const ImmigrationBanner = () => {
  return (
    <Banner elevation={4}>
      <Grid container>
        <Grid item xs={12} md={7} p={3}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            <Box component="span" color="#ffcc00">Study Abroad</Box> with Jain Overseas
          </Typography>
          
          <Typography variant="body2" paragraph sx={{ opacity: 0.9, mb: 2 }}>
            Premier immigration services for UK, Canada & Australia with 98% visa success rate
          </Typography>
          
          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
            <FeatureItem icon={<School />} text="Student Visa" />
            <FeatureItem icon={<Public />} text="15+ Countries" />
            <FeatureItem icon={<CheckCircle />} text="98% Success" />
            <FeatureItem icon={<Support />} text="End-to-End Support" />
          </Box>
          
          <Button 
            variant="contained" 
            sx={{
              bgcolor: '#ffcc00',
              color: '#1a3a8f',
              fontWeight: 600,
              '&:hover': { bgcolor: 'white' }
            }}
          >
            Free Consultation
          </Button>
        </Grid>
        
        <Grid item xs={12} md={5} sx={{
          minHeight: 200,
          background: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80) center/cover',
        }} />
      </Grid>
    </Banner>
  );
};

export default ImmigrationBanner;