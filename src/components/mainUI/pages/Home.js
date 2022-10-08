import React from "react";
import HeroSlider from "../containers/HeroSlider";
import LatestProduct from "../containers/LatestProduct";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <LatestProduct />
      </main>
    </>
  );
};

export default Home;
