import GameBar from "../components/ui/GameBar";
import Header from "../components/ui/Header";
import MainText from "../components/ui/MainText";
import Footer from "../components/ui/Footer"
import Head from 'next/head'
import Name from '../components/ui/name'
import "./dashboard.css"

const Dashboard = () => {
  return (
      <div className="dashboard">
      <Head>
        <title>TypED</title>
      </Head>
      <Header />
      <Name />
      <GameBar />
      <MainText />
      <Footer />
      </div>
  );
};

export default Dashboard;
