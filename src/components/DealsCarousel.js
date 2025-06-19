import React from 'react';
import { Box, Typography, Button, Paper, styled } from '@mui/material';
import { LocalOffer } from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DealCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius * 2,
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const DealsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const deals = [
    {
      title: "Free Visa Consultation",
      description: "With flight booking to Canada",
      cta: "Book Now",
      icon: <LocalOffer color="primary" fontSize="large" />,
      color: "#1a3a8f"
    },
    {
      title: "Health Checkup Package",
      description: "Pre-travel medical examination",
      cta: "Get 10% Off",
      icon: <LocalOffer color="error" fontSize="large" />,
      color: "#d32f2f"
    },
    {
      title: "School Admission",
      description: "Special discount for Mayor World School",
      cta: "Enquire Now",
      icon: <LocalOffer color="success" fontSize="large" />,
      color: "#2e7d32"
    }
  ];

  return (
    <Box sx={{ py: 2 }}>
      <Slider {...settings}>
        {deals.map((deal, index) => (
          <Box key={index} sx={{ px: 1, py: 2 }}>
            <DealCard>
              <Box sx={{ 
                width: 60, 
                height: 60, 
                borderRadius: '50%', 
                bgcolor: `${deal.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2
              }}>
                {deal.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {deal.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {deal.description}
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: deal.color,
                  '&:hover': { bgcolor: `${deal.color}` }
                }}
              >
                {deal.cta}
              </Button>
            </DealCard>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default DealsCarousel;