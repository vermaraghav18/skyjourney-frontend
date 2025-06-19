import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import './FeatureBanner.css';

// ✅ Import images from src/assets
import img1 from '../assets/featurebanner/1.png';
import img2 from '../assets/featurebanner/2.png';
import img3 from '../assets/featurebanner/3.png';

const features = [
  {
    image: img1,
    imgClass: 'feature-img-one',
    title: "Explore Every Destination",
    description: "Find the cheapest flights to anywhere in the world. Just enter your origin and let us do the rest.",
  },
  {
    image: img2,
    imgClass: 'feature-img-two',
    title: "No Hidden Charges",
    description: "We show you the real prices—no surprises at checkout. What you see is what you pay.",
  },
  {
    image: img3,
    imgClass: 'feature-img-three',
    title: "Book at the Right Time",
    description: "Set price alerts and get notified when fares drop. Never miss a deal again.",
  },
];

const FeatureBanner = () => {
  return (
    <Box className="feature-banner-container">
      <Paper elevation={2} className="feature-banner-paper">
        <Typography variant="h5" className="feature-banner-title">
          Why Travel with Us?
        </Typography>
        <Typography variant="subtitle1" className="feature-banner-subtitle">
          Transparent deals, smart tools, and unbeatable destinations – all in one place.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="feature-card">
                <img src={feature.image} alt={feature.title} className={feature.imgClass} />
                <Typography variant="h6" mt={2}>{feature.title}</Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default FeatureBanner;