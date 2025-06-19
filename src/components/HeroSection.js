// src/components/HeroSection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import './HeroSection.css';
import ServiceTabs from '../components/ServiceTabs';




function HeroSection() {
const navigate = useNavigate();

const [form, setForm] = useState({
  departure: '',
  arrival: '',
  date: '',
  returnDate: '',
  passengers: 1
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const params = new URLSearchParams(form).toString();
  navigate(`/search?${params}`);
};



  return (
    <div className="hero-container">
   
      
      {/* Sky background (pulse effect) */}
      <motion.div
        className="sky-background"
        animate={{
          scale: [1, 1.01, 1],
          filter: ['brightness(1)', 'brightness(1.03)', 'brightness(1)']
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
 
 {/* 🧾 Tagline Behind Plane */}
  <motion.h1
  className="hero-tagline"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.5, ease: 'easeOut' }}
>
  TripScanner.in
</motion.h1>
<ServiceTabs />
      {/* Back cloud (slow) */}
      <motion.img
        src="/hero/singlecloud.png"
        className="cloud-back"
        alt="Cloud Back"
        animate={{ x: ['0vw', '5vw', '0vw'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* Mid cloud (medium) */}
      <motion.img
        src="/hero/singlecloud.png"
        className="cloud-mid"
        alt="Cloud Mid"
        animate={{ x: ['0vw', '15vw', '0vw'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Front cloud (fast) */}
      <motion.img
        src="/hero/singlecloud.png"
        className="cloud-front"
        alt="Cloud Front"
        animate={{ x: ['0vw', '25vw', '0vw'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Cloud streak at the bottom */}
      <motion.img
        src="/hero/streak1.png"
        className="cloud-streak"
        alt="Streak"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Plane flying in from bottom left */}
      <motion.img
        src="/hero/airplane.png"
        className="airplane"
        alt="Airplane"
        initial={{ x: '-100vw', y: '0vh ', rotate: 0, opacity: 1 }}
       animate={{
    x: '-25vw',
    y: ['-30vh', '-31vh', '-30vh'], // gentle up & down motion
    rotate: 0,
    opacity: 1
  }}
  transition={{
    x: { duration: 3, ease: 'easeOut' },  // entrance
    y: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  }}
        whileHover={{ scale: 1.03}}
      />
      <motion.div 
  className="hero-search-wrapper"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2.5, duration: 1 }}
>
  <form onSubmit={handleSubmit} className="hero-search-form">
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={2}>
        <TextField 
          name="departure" 
          value={form.departure} 
          onChange={handleChange}
          placeholder="From" 
          fullWidth 
          required 
          variant="outlined" 
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField 
          name="arrival" 
          value={form.arrival} 
          onChange={handleChange}
          placeholder="To" 
          fullWidth 
          required 
          variant="outlined" 
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField 
          name="date" 
          type="date"
          value={form.date} 
          onChange={handleChange}
          fullWidth 
          required 
          variant="outlined" 
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField 
          name="returnDate" 
          type="date"
          value={form.returnDate} 
          onChange={handleChange}
          fullWidth 
          variant="outlined" 
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField 
          name="passengers" 
          type="number"
          value={form.passengers} 
          onChange={handleChange}
          fullWidth 
          label="Passengers"
          variant="outlined"
          inputProps={{ min: 1 }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
          size="large"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  </form>
</motion.div>




          
    </div>
  );
}

export default HeroSection;
