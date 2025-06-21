import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlide from "./components/HeroSlide";
import CardSlide from "./components/CardSlide";
import StorySlide from "./components/StorySlide";
import LoadingScreen from "./components/LoadingScreen";

import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white font-sans">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
