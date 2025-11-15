"use client";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    desc: string;
    tech: string[];
    live: string;
    repo: string;
    img: string;
  };
  onPreview: (project: any) => void;
}

const ProjectCard = ({ project, onPreview }: ProjectCardProps) => {
  return (
    <article className="bg-gradient-to-r from-indigo-500/10 via-pink-500/10 to-yellow-500/10 p-4 rounded-2xl border border-indigo-400/20 hover:scale-[1.02] transition backdrop-blur-sm">
      <div
        className="h-40 bg-gradient-to-br from-indigo-500/20 via-pink-500/20 to-yellow-500/20 rounded-lg flex items-end p-4 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="relative bg-black/40 backdrop-blur-sm p-2 rounded border border-pink-400/30">
          <h4 className="font-semibold text-white">{project.title}</h4>
        </div>
      </div>

      <p className="text-sm text-slate-200 mt-3">{project.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/30 text-slate-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onPreview(project)}
          className="text-sm px-3 py-2 rounded-2xl border border-yellow-400 hover:bg-yellow-500/20 text-white transition-colors flex-1"
        >
          Live Preview
        </button>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-sm px-3 py-2 rounded-2xl border border-pink-400 hover:bg-pink-500/20 text-white transition-colors flex-1 text-center"
        >
          Repo
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
