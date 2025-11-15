"use client";
import React from "react";
import ExperienceCard from "./ExperienceCard";

interface Work {
  company: string;
  role: string;
  desc: string;
  website?: string;
}

interface ExperienceProps {
  work: Work[];
}

const Experience = ({ work }: ExperienceProps) => {
  return (
    <section id="experience" className="py-12 max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {work.map((w, idx) => (
          <ExperienceCard key={idx} {...w} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
