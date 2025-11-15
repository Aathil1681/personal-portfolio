"use client";
import React from "react";
import {
  FaUserTie,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

interface ReferenceCardProps {
  name: string;
  title: string;
  contact: string;
  contactType?: "email" | "phone" | "linkedin";
}

const ReferenceCard = ({
  name,
  title,
  contact,
  contactType = "email",
}: ReferenceCardProps) => {
  const getContactIcon = () => {
    switch (contactType) {
      case "phone":
        return <FaPhone className="text-sm" />;
      case "linkedin":
        return <FaLinkedin className="text-sm" />;
      default:
        return <FaEnvelope className="text-sm" />;
    }
  };

  const getContactColor = () => {
    switch (contactType) {
      case "phone":
        return "text-indigo-300";
      case "linkedin":
        return "text-blue-400";
      default:
        return "text-yellow-300";
    }
  };

  return (
    <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-yellow-500/10 border border-indigo-400/20 backdrop-blur-sm hover:border-pink-400/30 transition-all duration-300 group">
      {/* Header with person icon */}
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/30 group-hover:from-pink-500/20 group-hover:to-yellow-500/20 transition-all">
          <FaUserTie className="text-indigo-300 group-hover:text-pink-300 transition-colors" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-pink-300 transition-all">
            {name}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FaBriefcase className="text-pink-400 text-xs" />
            <div className="text-sm text-slate-300">{title}</div>
          </div>
        </div>
      </div>

      {/* Contact information */}
      <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-indigo-500/5 to-pink-500/5 border border-indigo-400/10">
        <div
          className={`p-1.5 rounded bg-indigo-500/10 border border-indigo-400/20 ${getContactColor()}`}
        >
          {getContactIcon()}
        </div>
        <div className="text-xs text-slate-200 font-medium">{contact}</div>
      </div>

      {/* Decorative gradient accent */}
      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full transition-all duration-500 mt-3" />
    </div>
  );
};

export default ReferenceCard;
