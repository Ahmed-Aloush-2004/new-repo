import React, { useEffect, useState } from "react";
import Suggestions from "./suggesstions";

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value;
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setError(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users, filteredUsers);
function handleClick(e) {
  console.log(e.target.innerText);
  setSearchParams(e.target.innerText);
  setShowDropdown(false);
  setFilteredUsers([]);
}
  return (
    <>
      <div className="search-autocomplete-container">
      {loading ? <h1>Loading Data ! Please </h1>:
      <input
          onChange={handleChange}
          value={searchParams}
          type="text"
          name="search-users"
          placeholder="Search Users here..."
        />
        }
        {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
      </div>
    </>
  );
}

export default SearchAutocomplete;
