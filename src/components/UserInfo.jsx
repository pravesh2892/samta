import React, { useState, useEffect } from "react";

function UserInfo({ globalSearchTerm }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pastSearches, setPastSearches] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

    const storedSearches =
      JSON.parse(localStorage.getItem("pastSearches")) || [];
    setPastSearches(storedSearches);
  }, []);

  useEffect(() => {
    if (globalSearchTerm) {
      setSearchTerm(globalSearchTerm);
      addToPastSearches(globalSearchTerm);
    }
  }, [globalSearchTerm]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    addToPastSearches(term);
  };

  const addToPastSearches = (term) => {
    if (term && !pastSearches.includes(term)) {
      const newPastSearches = [term, ...pastSearches].slice(0, 5);
      setPastSearches(newPastSearches);
      localStorage.setItem("pastSearches", JSON.stringify(newPastSearches));
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="user-info">
      <h2>User Info</h2>

      <h3>Past Searches</h3>
      <ul className="past-searches">
        {pastSearches.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
      <h3>User List</h3>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserInfo;
