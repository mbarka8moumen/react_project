import '../styles/Time.css';
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  
  const [targetDate] = useState(() => {
    const dynamicDate = new Date(); 
    dynamicDate.setDate(dynamicDate.getDate() + 20); 
    return dynamicDate;
  });

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval); 
  }, [targetDate]); 

  function calculateTimeRemaining(target) {
    const now = new Date();
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="countdown-container">
      <div className="countdown-item">{timeRemaining.days} <span>JOURS</span></div>
      <div className="countdown-item">{timeRemaining.hours} <span>HEURES</span></div>
      <div className="countdown-item">{timeRemaining.minutes} <span>MINUTES</span></div>
      <div className="countdown-item">{timeRemaining.seconds} <span>SECONDES</span></div>
    </div>
  );
}

export default CountdownTimer;
