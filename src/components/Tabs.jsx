import React from "react";

function Tabs({ currentTab, onTabChange }) {
  return (
    <div className="tabs">
      <ul>
        <li
          className={currentTab === "pomodoro" ? "active-tab" : ""}
          onClick={() => onTabChange("pomodoro")}
        >
          Pomodoro
        </li>
        <li
          className={currentTab === "shortBreak" ? "active-tab" : ""}
          onClick={() => onTabChange("shortBreak")}
        >
          Short break
        </li>
        <li
          className={currentTab === "longBreak" ? "active-tab" : ""}
          onClick={() => onTabChange("longBreak")}
        >
          Long break
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
