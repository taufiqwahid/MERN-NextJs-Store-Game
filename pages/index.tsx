import AOS from "aos";
import React, { useEffect } from "react";
import Footer from "../components/organisms/Footer";
import FeaturedGame from "../components/organisms/FeaturedGame";
import MainBanner from "../components/organisms/MainBanner";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import TransactionStep from "../components/organisms/TransactionStep";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Footer />
    </>
  );
}

export default Home;
