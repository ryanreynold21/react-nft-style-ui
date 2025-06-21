import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlide from "./components/HeroSlide";
import CardSlide from "./components/CardSlide";
import StorySlide from "./components/StorySlide";

import "./App.css";

const App = () => {
  return (
    <div className="bg-white font-sans">
      <Header />

      {/* The HeroSlide now acts as a fixed background */}
      <HeroSlide />

      {/* The main content scrolls over the background */}
      <main className="relative z-10">
        {/* This spacer pushes the content down to reveal the hero background */}
        <div className="h-screen" />

        <CardSlide />
        <StorySlide />
      </main>

      <Footer />
    </div>
  );
};

export default App;
