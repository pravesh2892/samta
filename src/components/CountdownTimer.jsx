import React, { useState } from "react";
import Timer from "./Timer";
import Tabs from "./Tabs";
import Settings from "./Settings";
import gear from "../Assets/gear.png";

function CountdownTimer() {
  const [showSettings, setShowSettings] = useState(false);
  const [currentTab, setCurrentTab] = useState("pomodoro");
  const [timerSettings, setTimerSettings] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    cycles: 2,
  });

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="container">
      <Tabs currentTab={currentTab} onTabChange={handleTabChange} />
      <Timer settings={timerSettings} currentTab={currentTab} />
      <div className="settings">
        <img src={gear} alt="settings" onClick={() => setShowSettings(true)} />
      </div>
      {showSettings && (
        <Settings
          settings={timerSettings}
          onSettingsChange={setTimerSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default CountdownTimer;
