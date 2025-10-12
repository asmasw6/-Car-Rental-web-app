import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import Baner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <Baner />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
