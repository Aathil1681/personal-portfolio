"use client";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import References from "./components/References";
import Tech from "./components/Tech";

// Sample Data
const projectsData = [
  {
    id: "bookstore",
    title: "Bookmark — Online Book Store",
    desc: "Full-stack book-selling platform with JWT auth, admin panel, search & filters, built with Next.js + Prisma + MongoDB.",
    tech: ["Next.js", "Tailwind", "Prisma", "MongoDB", "TypeScript"],
    live: "https://online-book-store-j7t4.vercel.app/",
    repo: "https://github.com/Aathil1681/online-book-store",
    img: "/projects/bookmark.png",
  },
  {
    id: "techtalk",
    title: "Tech-Talk — CRUD Blog",
    desc: "A full CRUD blog platform with profiles, search, pagination and JWT-based auth.",
    tech: ["Next.js", "React Query", "Framer Motion", "Zod", "Tailwind CSS"],
    live: "https://crud-blogs.vercel.app/",
    repo: "https://github.com/Aathil1681/crud-blogs",
    img: "/projects/techtalk.png",
  },
  {
    id: "projex",
    title: "ProjeX — Project Management",
    desc: "Project & task management app with role-based access and task workflow columns.",
    tech: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
    live: "https://projex-zeta.vercel.app/",
    repo: "https://github.com/Aathil1681/projex",
    img: "/projects/projeX.png",
  },
];

const workData = [
  {
    company: "Kifgo",
    role: "Full-stack Developer (Intern)",
    website: "https://www.kifgo.lk/",
    logo: "/experience/kifgo.png",
    desc: "Built internal features, participated in code reviews, testing and deployed apps using Next.js and MongoDB.",
  },
  {
    company: "Rizzi International",
    role: "Full-stack Developer",
    website: "https://www.rizziinternational.com/",
    logo: "/experience/rizzi.jpg",
    desc: "Contributed front-end and UI work using Next.js, Tailwind CSS and modern libraries.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Main scrollToId="projects" />
        <Projects projects={projectsData} />
        <Experience work={workData} />
        <Tech />
        <References />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
