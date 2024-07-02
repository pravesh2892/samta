import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CountdownTimer from "./components/CountdownTimer";
import UserInfo from "./components/UserInfo";
import "./App.css";

function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");

  const handleGlobalSearch = (term) => {
    setGlobalSearchTerm(term);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleGlobalSearch} />
      <div className="app-container">
        <UserInfo globalSearchTerm={globalSearchTerm} />
        <CountdownTimer />
      </div>
    </div>
  );
}

export default App;
