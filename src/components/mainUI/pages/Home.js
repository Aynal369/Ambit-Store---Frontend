import React from "react";
import LatestProduct from "../containers/LatestProduct";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <LatestProduct />
      </main>
      <Footer />
    </>
  );
};

export default Home;
