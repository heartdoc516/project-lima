import React from "react";
import { useUser } from "../components/UserContext";
import { NewMonsterCard } from "../components";

const Dashboard = () => {
  const [user, setUser] = useUser();
  return (
    <main className="bg-stone-900 h-full">
      <section className="container mx-auto">
        <div>{user ? "dashboard" : "sign in to access dashboard"}</div>
        <h1>Create Monster</h1>
        <NewMonsterCard className="w-1/3" />
      </section>
    </main>
  );
};

export default Dashboard;
