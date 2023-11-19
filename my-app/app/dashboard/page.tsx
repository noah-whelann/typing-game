import GameBar from "../components/ui/GameBar";
import Header from "../components/ui/Header";
import React from "react";

const Dashboard = () => {
  return (
    <div
      className="h-screen bg-primary"
    >
      <Header />
      <GameBar />
    </div>
  );
};

export default Dashboard;
