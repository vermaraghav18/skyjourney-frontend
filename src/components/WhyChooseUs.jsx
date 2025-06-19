// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';
import calendarIcon from '../assets/why/calendar.png';
import priceIcon from '../assets/why/price.png';
import refundIcon from '../assets/why/refund.png';
import supportIcon from '../assets/why/support.png';
import fireIcon from '../assets/why/deal.png';

const features = [
  {
    icon: calendarIcon,
    title: 'Smart Booking',
    description: 'Seamless booking in seconds – no hassle, no hidden steps.',
  },
  {
    icon: priceIcon,
    title: 'Best Rates',
    description: 'Unbeatable deals on flights, stays & more – no inflated prices.',
  },
  {
    icon: refundIcon,
    title: 'Quick Refunds',
    description: 'Need to cancel? We ensure lightning-fast refunds.',
  },
  {
    icon: supportIcon,
    title: 'Real-time Help',
    description: '24/7 live chat & call support from actual humans.',
  },
  {
    icon: fireIcon,
    title: 'Limited Deals',
    description: 'Daily exclusive deals you won’t find anywhere else.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-container">
      <h2 className="why-title">Why Choose Us?</h2>
      <div className="why-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <img src={feature.icon} alt={feature.title} className="why-icon" />
            <h3 className="why-card-title">{feature.title}</h3>
            <p className="why-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
