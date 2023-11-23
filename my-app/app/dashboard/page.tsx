import GameBar from "../components/ui/GameBar";
import Header from "../components/ui/Header";
import MainText from "../components/ui/MainText";
import Data from "../components/ui/Data";
import Footer from "../components/ui/Footer"
import React from "react";
import Head from 'next/head'

const Dashboard = () => {
  return (
    <div
      className="h-screen bg-primary overflow-scroll"
    >
      <Head>
        <title>TypED</title>
      </Head>
      <Header />
      <GameBar />
      <MainText />
      <Data />
      <Footer />
    </div>
  );
};

export default Dashboard;
