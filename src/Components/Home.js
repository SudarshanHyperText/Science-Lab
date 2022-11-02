import React from "react";

const Home = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      Home page
      <button type="button" onClick={handleLogout}>
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};

export default Home;
