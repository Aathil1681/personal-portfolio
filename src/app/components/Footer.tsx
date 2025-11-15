"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Aathil Ihlaas — Built with Next.js • Tailwind
      • Spline
    </footer>
  );
};

export default Footer;
