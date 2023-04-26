import React from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Logout = () => {
  const [user, setUser] = useUser();
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await fetch("http://localhost:8080/logout");
    setUser(null);
    sessionStorage.clear();

    navigate("/");
  }

  return (
    <button onClick={handleLogout} className="text-white bg-red-600 px-6 py-3">
      Log out
    </button>
  );
};

export default Logout;
