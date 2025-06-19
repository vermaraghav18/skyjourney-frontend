// src/components/ServiceTabs.jsx
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  Flight, Hotel, Villa, BeachAccess, Train, DirectionsBus,
  DriveEta, CreditCard, MonetizationOn, HealthAndSafety
} from '@mui/icons-material';
import './ServiceTabs.css';

const tabs = [
  { label: 'Flights', icon: <Flight fontSize="large" /> },
  { label: 'Hotels', icon: <Hotel fontSize="large" /> },
  { label: 'Homestays & Villas', icon: <Villa fontSize="large" /> },
  { label: 'Holiday Packages', icon: <BeachAccess fontSize="large" /> },
  { label: 'Trains', icon: <Train fontSize="large" /> },
  { label: 'Buses', icon: <DirectionsBus fontSize="large" /> },
  { label: 'Cabs', icon: <DriveEta fontSize="large" /> },
  { label: 'Visa', icon: <CreditCard fontSize="large" /> },
  { label: 'Travel Insurance', icon: <HealthAndSafety fontSize="large" /> },
];

function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box className="service-tabs-floating">
      {tabs.map((tab, index) => (
        <Box
          key={index}
          className={`tab-item ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          <div className="tab-icon">{tab.icon}</div>
          <Typography variant="subtitle2" className="tab-label">
            {tab.label}
          </Typography>
          {activeTab === index && <div className="active-underline" />}
        </Box>
      ))}
    </Box>
  );
}

export default ServiceTabs;
