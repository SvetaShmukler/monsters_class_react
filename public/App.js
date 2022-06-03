import React, { useState, useEffect } from 'react';
import './App.css';


function Timer () {
  const [seconds, setSeconds] = useState(0);
  const [isActive] = useState(true);


  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);

  const formatSeconds = () => {
    const hr = Math.floor(seconds / 3600);
    const min = Math.floor(seconds / 60) - (hr * 60);
    const sec = Math.floor(seconds - hr * 3600 - min * 60);
    const time = `${hr}:${min}:${sec}`
    return time
  }

  return (
    <div className="app">
      <div className="time">
        <strong>time is:  {formatSeconds()}</strong>
      </div>
    </div>
  );
};

export default Timer;