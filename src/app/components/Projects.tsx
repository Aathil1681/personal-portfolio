"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  live: string;
  repo: string;
  img: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [activePreview, setActivePreview] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-semibold mb-6">Selected Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onPreview={setActivePreview} />
        ))}
      </div>

      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="w-full max-w-5xl bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b border-slate-800">
              <div className="font-semibold">
                Live Preview — {activePreview.title}
              </div>
              <div className="flex gap-2">
                <a
                  href={activePreview.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-1 rounded bg-emerald-600/20 border border-emerald-500"
                >
                  Open in new tab
                </a>
                <button
                  onClick={() => setActivePreview(null)}
                  className="text-sm px-3 py-1 rounded bg-slate-700/40"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="h-[70vh] md:h-[80vh] lg:h-[90vh] w-[120%] bg-white">
              <iframe
                src={activePreview.live}
                title={activePreview.title}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
