"use client";

import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

interface HeroProps {
  sceneUrl?: string;
  title?: string;
  scrollToId?: string;
}

const Main = ({
  sceneUrl = "https://prod.spline.design/FZeObbcOhtaF2j6f/scene.splinecode",
  title = "Welcome to My Portfolio",
}: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineRef = useRef(null);

  return (
    <div className="relative h-[130vh] w-full bg-black top-20">
      {/* Spline 3D Scene */}
      <Spline
        scene={sceneUrl}
        onLoad={() => setIsLoaded(true)}
        ref={splineRef}
      />

      {/* Hero Text */}
      {isLoaded ? (
        <p
          className="absolute top-10 w-full flex justify-center items-center text-center gap-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 drop-shadow-lg font-sans
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              px-4 sm:px-6"
        >
          {title}
        </p>
      ) : (
        <p className="absolute bottom-10 left-5 sm:left-10 text-gray-400 text-sm sm:text-base">
          Loading 3D scene...
        </p>
      )}
    </div>
  );
};

export default Main;
