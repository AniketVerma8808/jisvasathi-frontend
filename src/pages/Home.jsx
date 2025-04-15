import React from "react";
import HeroSection from "../components/HeroSection";
import JourneyBegins from "../components/JourneyBegins";
import ConciergeSection from "../components/ConciergeSection";
import TestimonialSection from "../components/TestimonialSection";
import BlogSection from "../components/BlogSection";
import Faqs from "../components/faqs";
import TrustedByMillions from "../components/TrustedByMillions";

const Home = () => {
  return (
    <>
      <HeroSection />
      <JourneyBegins />
      <ConciergeSection />
      <TestimonialSection />
      <BlogSection />
      <Faqs />
      <TrustedByMillions />
    </>
  );
};

export default Home;
