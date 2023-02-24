import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
import Testimonials from "../components/Testimonials/Testimonials";
import Virtual from "../components/Virtual/Virtual";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}
