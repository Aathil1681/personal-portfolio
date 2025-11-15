"use client";

import { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

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
  const [isMobile, setIsMobile] = useState(false);
  const splineRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative h-[110vh] w-full bg-black top-20">
      {/* Show Spline only on desktop, Next Image on mobile */}
      {!isMobile ? (
        <Spline
          scene={sceneUrl}
          onLoad={() => setIsLoaded(true)}
          ref={splineRef}
        />
      ) : (
        <div className="w-full h-full relative">
          <Image
            src="/fallback.PNG"
            alt="Portfolio Background"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      )}

      {/* Hero Text */}
      {isLoaded || isMobile ? (
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
