import React from 'react';
import { Box } from '@mui/material';
import ImmigrationBanner from './ImmigrationBanner';
import HospitalBanner from './HospitalBanner';
import SchoolBanner from './SchoolBanner';

const AdsBanner = () => {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      '& > div': {
        mb: 4
      }
    }}>
      <ImmigrationBanner />
      <HospitalBanner />
      <SchoolBanner />
    </Box>
  );
};

export default AdsBanner;