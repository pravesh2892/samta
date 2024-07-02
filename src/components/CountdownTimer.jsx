import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(60);
  };

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    if (!isNaN(newTime)) {
      setTime(newTime);
    }
  };

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer</h2>
      <input
        type="number"
        value={time}
        onChange={handleTimeChange}
        disabled={isRunning}
      />
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
      <p>Current Time: {time} seconds</p>
    </div>
  );
}

export default CountdownTimer;
