"use client";
import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  role: string;
  desc: string;
  website?: string;
  logo?: string;
}

const ExperienceCard = ({
  company,
  role,
  desc,
  website,
  logo,
}: ExperienceCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-pink-500/10 to-yellow-500/10 border border-indigo-400/20 backdrop-blur-sm hover:border-pink-400/30 transition-colors">
      <div className="flex items-center gap-4">
        {/* LOGO IMAGE */}
        <div className="w-14 h-14  overflow-hidden flex items-center justify-center">
          {logo ? (
            <Image
              src={logo}
              alt={company}
              width={56}
              height={56}
              className="object-contain"
            />
          ) : (
            <span className="text-white/70 text-sm">No Logo</span>
          )}
        </div>

        <div>
          <div className="font-semibold text-white">{company}</div>
          <div className="text-sm text-slate-300">{role}</div>
        </div>
      </div>

      <p className="text-sm text-slate-200 mt-4 leading-relaxed">{desc}</p>

      {website && (
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="text-xs mt-3 inline-block text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
        >
          Visit website →
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
