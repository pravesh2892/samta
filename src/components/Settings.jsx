import React from "react";
import cross from "../Assets/cross.png";

function Settings({ settings, onSettingsChange, onClose }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onSettingsChange({ ...settings, [name]: parseInt(value) });
  };

  return (
    <div className="settingsPage">
      <div className="settingsPageHeading">
        <h1>Settings</h1>
        <img
          src={cross}
          alt="close"
          onClick={onClose}
          className="closeSettings"
        />
      </div>

      <hr />

      <h2>Time (Minutes)</h2>
      <div className="timeSettings">
        <div>
          <label htmlFor="shortBreak">Short Timer</label>
          <input
            type="number"
            id="shortBreak"
            name="shortBreak"
            value={settings.shortBreak}
            onChange={handleInputChange}
            min="5"
            max="15"
            step="1"
          />
        </div>
        <div>
          <label htmlFor="longBreak">Long Timer</label>
          <input
            type="number"
            id="longBreak"
            name="longBreak"
            value={settings.longBreak}
            onChange={handleInputChange}
            min="10"
            max="50"
            step="5"
          />
        </div>
      </div>

      <hr />

      <div className="colorSection">
        <h2>Cycles</h2>
        <ul>
          <input
            id="cycles"
            type="number"
            name="cycles"
            value={settings.cycles}
            onChange={handleInputChange}
            min="2"
            step="2"
            max="6"
          />
        </ul>
      </div>

      <button className="apply" onClick={onClose}>
        Apply
      </button>
    </div>
  );
}

export default Settings;
