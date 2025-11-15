"use client";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["projects", "experience", "tech", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "experience", "tech", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name & Role */}
        <div className="flex items-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 via-pink-500 to-yellow-500 rounded-full"></div>
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Aathil Ihlaas
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Software Engineer — Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 sm:mt-0 bg-white/20 backdrop-blur-sm rounded-2xl p-1.5 shadow-lg">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 hover:scale-105
                ${
                  activeSection === id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              style={{
                background:
                  activeSection === id
                    ? "linear-gradient(135deg, #6366f1, #ec4899)"
                    : "transparent",
              }}
            >
              <span className="relative z-10">{id}</span>
            </a>
          ))}

          <a
            href="/cv/Resume.pdf"
            download="Aathil-CV.pdf"
            className="ml-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-indigo-600 hover:to-pink-600"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Hamburger Menu - Top Right */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full right-0 w-full bg-black/90 backdrop-blur-sm rounded-b-2xl p-4 shadow-lg flex flex-col gap-2 z-50">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 hover:scale-105
                ${
                  activeSection === id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              style={{
                background:
                  activeSection === id
                    ? "linear-gradient(135deg, #6366f1, #ec4899)"
                    : "transparent",
              }}
            >
              {id}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
