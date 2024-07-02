import React, { useState, useEffect } from "react";

function Timer({ settings, currentTab }) {
  const [timeLeft, setTimeLeft] = useState(getInitialTime());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeLeft(getInitialTime());
    setIsActive(false);
  }, [currentTab, settings]);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Handle timer completion
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  function getInitialTime() {
    switch (currentTab) {
      case "shortBreak":
        return settings.shortBreak * 60;
      case "longBreak":
        return settings.longBreak * 60;
      default:
        return settings.pomodoro * 60;
    }
  }

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="circle">
      <div className="gradient-circle">
        <div className="inner-circle">
          <h1>{formatTime(timeLeft)}</h1>
          <p onClick={toggleTimer}>{isActive ? "pause" : "start"}</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
