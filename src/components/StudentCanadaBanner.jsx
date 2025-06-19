// src/components/StudentCanadaBanner.jsx
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const StudentCanadaBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          overflow: 'hidden',
          borderRadius: 3,
          p: 3,
          background: '#fff',
        }}
      >
        <Grid container alignItems="center">
          {/* Left side: Video */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                minHeight: 280,
                position: 'relative',
              }}
            >
              <video
                src="/videos/canada.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>
          </Grid>

          {/* Right side: Text + CTA */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
                Study in Canada 🇨🇦
              </Typography>
              <Typography variant="subtitle1" gutterBottom color="text.secondary">
                Unlock world-class education, scholarships, and post-graduation opportunities.
              </Typography>

              <List dense>
                <ListItem>
                  <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Top-ranked universities and colleges" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Affordable tuition and scholarships" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="2-3 year work permits post-study" />
                </ListItem>
              </List>

              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 2 }}
                color="primary"
                onClick={() => window.open('https://example.com/apply-canada', '_blank')}
              >
                Get Free Counseling
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default StudentCanadaBanner;
