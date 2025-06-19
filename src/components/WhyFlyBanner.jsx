// src/components/WhyFlyBanner.jsx
import React, { useEffect, useRef, useState } from 'react';
import './WhyFlyBanner.css';
import bannerImage from '../assets/whyfly.png';

const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    let frame;
    const totalFrames = Math.round(duration / 16); // ~60fps
    const counter = () => {
      start++;
      const progress = start / totalFrames;
      setCount(Math.floor(end * progress));
      if (start < totalFrames) frame = requestAnimationFrame(counter);
      else setCount(end);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) counter();
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      cancelAnimationFrame(frame);
      if (ref.current) observer.disconnect();
    };
  }, [end, duration]);
  return [count, ref];
};

const WhyFlyBanner = () => {
  const [customers, customersRef] = useCountUp(500, 1000);
  const [rating, ratingRef] = useCountUp(47, 1000); // 4.7 → 47 / 10

  return (
    <div className="whyfly-container">
      <img src={bannerImage} alt="Why Fly" className="whyfly-image" />
      <div className="whyfly-content">
        <div className="whyfly-stats">
          <div ref={customersRef}>
            <h2>{customers}+</h2>
            <p>Happy Customers</p>
          </div>
          <div ref={ratingRef}>
            <h2>{(rating / 10).toFixed(1)}★</h2>
            <p>Star Rating</p>
          </div>
        </div>
        <h1 className="whyfly-title">Why Fly with Us?</h1>
        <p className="whyfly-description">
          Experience hassle-free bookings, affordable prices, and reliable service across 1200+ destinations. Our users trust us for seamless journeys, real-time support, and exclusive travel deals you won’t find anywhere else.
        </p>
      </div>
    </div>
  );
};

export default WhyFlyBanner;
