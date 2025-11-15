"use client";
import React from "react";

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
}

const TechCard = ({ icon, name }: TechCardProps) => {
  return (
    <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500/10 via-pink-500/10 to-yellow-500/10 border border-indigo-400/20 backdrop-blur-sm flex items-center gap-3 hover:border-pink-400/30 hover:scale-[1.02] transition-all duration-200 group">
      <div className="text-indigo-300 group-hover:text-pink-300 transition-colors">
        {icon}
      </div>
      <div className="text-slate-200 group-hover:text-white transition-colors">
        {name}
      </div>
    </div>
  );
};

export default TechCard;
