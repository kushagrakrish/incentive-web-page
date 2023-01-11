import React from "react";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import HeroSection from "./LandingPage/HeroSection";
import Banner from "./MidSection/Banner";
import OfferSection from "./MidSection/OfferSection";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <OfferSection />
      {/* <Form /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
