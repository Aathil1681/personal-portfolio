"use client";
import React from "react";
import TechCard from "./TechCard";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiJira,
  SiVsco,
  SiSlack,
} from "react-icons/si";

const techStack = [
  { icon: <SiNextdotjs size={28} />, name: "Next.js" },
  { icon: <SiTailwindcss size={28} />, name: "Tailwind CSS" },
  { icon: <SiTypescript size={28} />, name: "TypeScript" },
  { icon: <SiPrisma size={28} />, name: "Prisma" },
  { icon: <SiMongodb size={28} />, name: "MongoDB" },
  { icon: <SiJira size={22} />, name: "JIRA" },
  { icon: <SiVsco size={22} />, name: "VS Code" },
  { icon: <SiSlack size={22} />, name: "Slack" },
];

const Tech = () => {
  return (
    <section id="tech" className="py-12 max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-semibold mb-6">Tools & Tech</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {techStack.map((t) => (
          <TechCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Tech;
