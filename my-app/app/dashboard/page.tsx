import GameBar from "../components/ui/GameBar";
import Header from "../components/ui/Header";
import MainText from "../components/ui/MainText";
import Data from "../components/ui/Data";
import Footer from "../components/ui/Footer"
import React from "react";

const Dashboard = () => {
  return (
    <div
      className="h-screen bg-primary"
    >
      <Header />
      <GameBar />
      <MainText />
      <Data />
      <Footer />
    </div>
  );
};

export default Dashboard;
