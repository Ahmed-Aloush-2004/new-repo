import React, { useEffect, useState } from "react";
import User from "./user";
import "./style.css"
function GithubProfileFinder() {
  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleSubmit() {
    fetchGithubUserData();
  }
  async function fetchGithubUserData() {
    try {
      setLoading(true);

      const res = await fetch(`https://api.github.com/users/${userName}`);

      const data = await res.json();

      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }

      console.log(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) return <h1>Loading data ! Please wait </h1>;
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

export default GithubProfileFinder;
