import React from "react";

function Tabs({ currentTab, onTabChange }) {
  return (
    <div className="tabs">
      <ul>
        <li
          className={currentTab === "shortBreak" ? "active-tab" : ""}
          onClick={() => onTabChange("shortBreak")}
        >
          Short Timer
        </li>
        <li
          className={currentTab === "longBreak" ? "active-tab" : ""}
          onClick={() => onTabChange("longBreak")}
        >
          Long Timer
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
